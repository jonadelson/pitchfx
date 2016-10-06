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
            ))

(defn autocomplete
  []
  (let [data (re-frame/subscribe [:app-data])
        cluster-choice (re-frame/subscribe [:cluster-choice])
        pitcher-chosen? (re-frame/subscribe [:pitcher-chosen?])]
    (fn []
      (when @data
        [box/h-box
         :gap "10px"
         :children [[ac/typeahead
                     :data-source (fn [str]
                                    (->> (map #(select-keys % [:mlb_id :name :year]) @data)
                                         (filter (fn [d] (-> d :name s/lower-case (s/includes? (s/lower-case str)))))
                                         (take 10)))
                     :render-suggestion (fn [d]
                                          [:div (str (:name d) " (" (:year d) ")")])
                     :suggestion-to-string (fn [d] (str (:name d) " (" (:year d) ")"))
                     :change-on-blur? true
                     :width "230px"
                     :disabled? (not @pitcher-chosen?)
                     :on-change #(do
                                   (let [pitcher [(:mlb_id %) (:year %)]
                                         kw (-> (str "c" @cluster-choice) keyword)]
                                     (re-frame/dispatch [:change-pitcher pitcher])
                                     (when (and @cluster-choice @pitcher-chosen?)
                                       (re-frame/dispatch [:set-chosen-group (->> @data
                                                                                  (filter (fn [d] (= [(:mlb_id d) (:year d)] pitcher)))
                                                                                  first
                                                                                  kw
                                                                                  inc)]))))]
                    [misc/checkbox
                     :model @pitcher-chosen?
                     :on-change #(re-frame/dispatch [:set-pitcher-chosen (not @pitcher-chosen?)])]]]))))

(defn view-tabs
  []
  (let [view (re-frame/subscribe [:view])]
    (fn []
      [tab/horizontal-tabs
       :tabs [{:id :data :label "data"}
              {:id :graphs :label "graphs"}]
       :model @view
       :on-change #(re-frame/dispatch [:change-view %])
       :style {:width "125px"}])))

(defn top-bar
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
          :gap "10px"
          :children [[box/h-box
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
                                  :width "125px"]
                                 [dd/single-dropdown
                                  :choices (->> (for [i (range 1 (inc @cluster-choice))]
                                                  {:id i :label (str i)})
                                                (into []))
                                  :model @chosen-group
                                  :placeholder "Pick Cluster Number"
                                  :on-change #(re-frame/dispatch [:set-chosen-group %])
                                  :width "125px"]]]
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
                                  :style {:width "125px"}]]]
                     [view-tabs]
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
                                 [-2 12]]))

(def stat->tab (zipmap stats tabs))


(defn chart-area
  [data]
  (let [chosen-stat (re-frame/subscribe [:chosen-stat])]
    (fn [data]
      [:div
       [box/h-box
        :children [[chart/histogram data
                    (stat->title @chosen-stat)
                    @chosen-stat
                    {:height 600 :width 700 :x-lim (stat->domain @chosen-stat)}]
                   [tab/vertical-pill-tabs
                    :tabs (->> (for [stat stats]
                                 {:id stat :label (stat->tab stat)})
                               (into []))
                    :model @chosen-stat
                    :on-change #(re-frame/dispatch [:set-chosen-stat %])]]]])))



(defn data-area
  []
  (let [view (re-frame/subscribe [:view])
        filtered (re-frame/subscribe [:filtered])]
    (fn []
      (condp = @view
        :data [dt/data-grid]
        :graphs [chart-area filtered]))))

;;chart/histogram filtered "Fangraphs WAR" :war {:height 600 :width 700 :x-lim [-2 10]}

(defn main-panel []
  (let []
    (fn []
      [:div
       [box/h-box
        :gap "50px"
        :children [[box/v-box
                    :children [[top-bar]]]
                   [box/h-box
                    :children [[data-area]]]]
        :style {:margin-top "10px" :margin-left "10px"}]])))
