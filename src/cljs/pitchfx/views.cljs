(ns pitchfx.views
  (:require [re-frame.core :as re-frame]
            [re-com.dropdown :as dd]
            [re-com.core :as rc]
            [re-com.box :as box]
            [re-com.tabs :as tab]
            [re-com.typeahead :as ac]
            [pitchfx.data-table :as dt]
            [clojure.string :as s]
            [re-com.misc :as misc]
            [pitchfx.charts :as chart]
            [re-com.text :as text]))

(defn autocomplete
  []
  (let [data (re-frame/subscribe [:app-data])
        cluster-choice (re-frame/subscribe [:cluster-choice])
        filter-pitchers? (re-frame/subscribe [:filter-pitchers?])
        chosen-pitcher (re-frame/subscribe [:chosen-pitcher])
        pitcher-sugg (re-frame/subscribe [:pitcher-sugg])
        id->name (re-frame/subscribe [:id->name])]
    (fn []
      (when @data
        [box/v-box
         :children [[misc/checkbox
                     :model @filter-pitchers?
                     :label "Enable Pitcher Filtering"
                     :on-change #(re-frame/dispatch [:set-filter-pitchers (not @filter-pitchers?)])]
                    [ac/typeahead
                     :data-source (fn [str]
                                    (->> (map #(select-keys % [:mlb_id :name :year]) @data)
                                         (filter (fn [d] (-> d :name s/lower-case (s/includes? (s/lower-case str)))))
                                         (take 10)))
                     :render-suggestion (fn [d]
                                          [:div (str (:name d) " (" (:year d) ")")])
                     :suggestion-to-string (fn [d] (str (:name d)))
                     :change-on-blur? true
                     :width "250px"
                     :disabled? (not @filter-pitchers?)
                     :model {:mlb_id 12345 :name "Filter by Pitcher ..." :year 1234}
                     :on-change #(do
                                   (let [pitcher [(:mlb_id %) (:year %)]
                                         kw (-> (str "c" @cluster-choice) keyword)]
                                     (re-frame/dispatch [:change-pitcher pitcher])
                                     (when (and @cluster-choice @filter-pitchers?)
                                       (re-frame/dispatch [:set-chosen-group (->> @data
                                                                                  (filter (fn [d] (= [(:mlb_id d) (:year d)] pitcher)))
                                                                                  first
                                                                                  kw
                                                                                  inc)]))))]]]))))

(defn view-tabs
  []
  (let [view (re-frame/subscribe [:view])]
    (fn []
      [tab/horizontal-pill-tabs
       :tabs [{:id :data :label "data"}
              {:id :graphs :label "graphs"}
              {:id :pitches :label "pitches"}]
       :model @view
       :on-change #(re-frame/dispatch [:change-view %])
       :style {:width (str (/ 250 3) "px") :text-align "center"}])))

(defn cluster-labels
  []
  [:div
   [box/h-box
    :children [[:code {:style {:width "125px"
                               :text-align "center"}}
                "# of Clusters"]
               [:code {:style {:width "125px"
                               :text-align "center"}}
                "Group Number"]]]])

#_[text/label
 :label "# of Clusters"
   :width "125px"]

(defn clusters
  []
  (let [chosen-group (re-frame/subscribe [:chosen-group])
        cluster-choice (re-frame/subscribe [:cluster-choice])
        cluster-choices (re-frame/subscribe [:cluster-choices])
        data (re-frame/subscribe [:app-data])
        chosen-pitcher (re-frame/subscribe [:chosen-pitcher])
        pitcher-chosen? (re-frame/subscribe [:pitcher-chosen?])]
    (fn []
      [:div [box/v-box
             :children
             [[cluster-labels]
              [box/h-box
               :children [[dd/single-dropdown
                           :choices @cluster-choices
                           :model @cluster-choice
                           :placeholder "Choose Number of Clusters"
                           :on-change #(do
                                         (re-frame/dispatch [:set-cluster-choice %])
                                         (let [kw (-> (str "c" %) keyword)]
                                           (when @pitcher-chosen?
                                             (re-frame/dispatch [:set-chosen-group (->> @data
                                                                                        (filter (fn [d] (= [(:mlb_id d) (:year d)] @chosen-pitcher)))
                                                                                        first
                                                                                        kw
                                                                                        inc)]))))
                           :width "125px"
                           :style {:text-align "center"}]
                          [dd/single-dropdown
                           :choices (->> (for [i (range 1 (inc @cluster-choice))]
                                           {:id i :label (str i)})
                                         (into []))
                           :model @chosen-group
                           :placeholder "Pick Cluster Number"
                           :on-change #(re-frame/dispatch [:set-chosen-group %])
                           :width "125px"
                           :style {:text-align "center"}]]]
              [box/h-box
               :children [[rc/button
                           :label "Previous Group"
                           :on-click #(when (> @chosen-group 1)
                                        (re-frame/dispatch [:dec-chosen-group @chosen-group]))
                           :style {:width "125px"}]
                          [rc/button
                           :label "Next Group"
                           :on-click #(when (< @chosen-group @cluster-choice)
                                        (re-frame/dispatch [:inc-chosen-group @chosen-group]))
                           :style {:width "125px"}]]]]]])))

(defn side-panel
  []
  (let [chosen-group (re-frame/subscribe [:chosen-group])
        cluster-choice (re-frame/subscribe [:cluster-choice])
        cluster-choices (re-frame/subscribe [:cluster-choices])
        data (re-frame/subscribe [:app-data])
        chosen-pitcher (re-frame/subscribe [:chosen-pitcher])
        pitcher-chosen? (re-frame/subscribe [:pitcher-chosen?])]
    (fn []
      (when @data
        [:div
         [box/v-box
          :gap "20px"
          :children [[view-tabs]
                     [clusters]
                     [autocomplete]
                     ]]]))))


(def stats
  [:tbf :k9 :bb9 :hr9 :hr_fb :gb_pct :fb_pct :fip :war])

(def titles
  ["Total Batters Faced"
   "Strikeouts Per 9"
   "Walks Per 9"
   "Homeruns per 9"
   "Homeruns per Flyball"
   "Groundball Percent"
   "Flyball Percent"
   "FIP"
   "Fangraphs WAR"])

(def tabs
  ["TBF" "K/9" "BB/9" "HR/9" "HR/FB" "GB %" "FB %" "FIP" "FWAR"])

(def stat->title (zipmap stats titles))
(def stat->domain (zipmap stats [[100 1100]
                                 [2 20]
                                 [0 10]
                                 [0 2]
                                 [0 20]
                                 [20 80]
                                 [10 50]
                                 [0 6]
                                 [-2 10]]))

(def stat->tab (zipmap stats tabs))


(defn chart-area
  [data]
  (let [chosen-stat (re-frame/subscribe [:chosen-stat])
        window-dims (re-frame/subscribe [:window-dims])]
    (fn [data]
      (let [[w h] @window-dims]
        [:div
         [box/h-box
          :children [[chart/histogram data
                      (stat->title @chosen-stat)
                      @chosen-stat
                      {:height (* h 0.75) :width (- w 600) :x-lim (stat->domain @chosen-stat)}]
                     [tab/vertical-pill-tabs
                      :tabs (->> (for [stat stats]
                                   {:id stat :label (stat->tab stat)})
                                 (into []))
                      :model @chosen-stat
                      :on-change #(re-frame/dispatch [:set-chosen-stat %])]]
          :width (str (- w 400) "px")]]))))


(defn cluster-count-area
  [data class-name]
  (let [window-dims (re-frame/subscribe [:window-dims])]
    (fn [data class-name]
      (let [[w h] @window-dims]
        [:div
         [box/v-box
          :children [[chart/cluster-counts data {:height (* h 0.8) :width (- w 800)} class-name]]]]))))

(defn data-area
  []
  (let [view (re-frame/subscribe [:view])
        filtered (re-frame/subscribe [:filtered])
        pitcher-pitches (re-frame/subscribe [:pitcher-pitches])
        window-dims (re-frame/subscribe [:window-dims])]
    (fn []
      (condp = @view
        :data [dt/data-grid]
        :graphs [chart-area filtered]
        :pitches [cluster-count-area pitcher-pitches "chart-1"]))))

;;chart/histogram filtered "Fangraphs WAR" :war {:height 600 :width 700 :x-lim [-2 10]}

(defn main-panel []
  (let [loaded? (re-frame/subscribe [:loaded?])]
    (fn []
      (if @loaded?
        [:div
         [box/h-box
          :gap "50px"
          :children [[box/v-box
                      :children [[side-panel]]
                      :style {:margin-top "20px"}
                      :width "300px"]
                     [box/h-box
                      :children [[data-area]]]]
          :style {:margin-top "30px" :margin-left "10px"}]]
        [:div
         [box/h-box
          :children [[misc/throbber
                      :size :large
                      :color "steelblue"]]]]))))
