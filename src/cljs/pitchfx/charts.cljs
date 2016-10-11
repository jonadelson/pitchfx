(ns pitchfx.charts
  (:require [cljsjs.d3]
            [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-com.text :as text]
            [re-com.box :as box]))

(defn draw-histogram
  [data stat props]
  (let [stat-name-year (map #((juxt stat :name :year) %) @data)
        stat->name-year (reduce (fn [acc [s n y]]
                                  (if-let [ny (get acc s)]
                                    (assoc acc s (conj ny (str n " " y)))
                                    (assoc acc s [(str n " " y)]))) {} stat-name-year)
        data (clj->js (map stat @data))
        formatCount (.format js/d3 ",.0f")
        margin {:top 10 :right 30 :bottom 30 :left 30}
        width (- (:width props) (:left margin) (:right margin))
        height (- (:height props) (:top margin) (:bottom margin))
        x (-> (.scaleLinear js/d3)
              (.domain (-> (:x-lim props) clj->js))
              (.range #js [0 width]))
        bins (-> (.histogram js/d3)
                 (.domain (.domain x))
                 (.thresholds (.ticks x 50)))
        bins (bins data)
        clj-bins (js->clj bins)
        y (-> (.scaleLinear js/d3)
              (.domain #js [0 (.max js/d3 bins (fn [d] (.-length d)))])
              (.range #js [height 0]))
        svg (-> (.select js/d3 ".chart-area")
                (.append "svg")
                (.attr "width" (+ width (:left margin) (:right margin)))
                (.attr "height" (+ height (:top margin) (:bottom margin)))
                (.append "g")
                (.attr "transform" (str "translate(" (:left margin) "," (:top margin) ")")))
        tip (-> (.select js/d3 ".chart-area")
                (.append "div")
                (.attr "class" "tooltip")
                (.style "opacity" 0))
        bar (-> (.selectAll svg ".bar")
                (.data bins)
                .enter
                (.append "g")
                (.attr "class" "bar")
                (.attr "transform" (fn [d] (str "translate(" (x (.-x0 d)) "," (y (.-length d)) ")"))))
        bar (-> (.append bar "rect")
                (.attr "x" 1)
                (.attr "width" (- (x (-> (aget bins 0) .-x1)) (x (-> (aget bins 0) .-x0)) 1))
                (.attr "height" (fn [d] (- height (y (.-length d)))))
                (.on "mouseover" (fn [d] (this-as this (let [transition (-> (.transition tip)
                                                                            (.duration 200)
                                                                            (.style "opacity" 0.9))
                                                             ny (->> d (into #{}) (mapcat stat->name-year) (into #{}))]
                                                         (-> (.select js/d3 this)
                                                             (.style "fill" "red"))
                                                         (-> tip
                                                             (.html (str "<div>" (->> (map #(str "<div>" % "</div>") ny) (apply str)) "</div>"))
                                                             (.style "left" (str (.-pageX (.-event js/d3)) "px"))
                                                             (.style "top" (str (- (.-pageY (.-event js/d3)) 50) "px")))))))
                (.on "mouseout" (fn [d] (this-as this
                                          (-> (.select js/d3 this)
                                              (.style "fill" "steelblue"))
                                          (-> tip
                                              .transition
                                              (.duration 500)
                                              (.style "opacity" 0))))))
        svg (-> (.append svg "g")
                (.attr "class" "axis axis--x")
                (.attr "transform" (str "translate(0," height ")"))
                (.call (.axisBottom js/d3 x)))
        svg (-> (.append svg "g")
                (.attr "class" "axis axis--y")
                (.attr "transform" (str "translate(0," (- height)")"))
                (.call (.axisLeft js/d3 y)))]))

(def cluster-cols
  (map #(-> (str "cluster_" %) keyword) (range 500)))


(defn draw-cluster-counts
  [data props]
  (let [data @data
        data (->> (filter #(pos? (:count %)) data))
        _ (println (count data))
        margin {:top 10 :right 30 :bottom 30 :left 70}
        width (- (:width props) (:left margin) (:right margin))
        height (- (:height props) (:top margin) (:bottom margin))
        x (-> (map :px data) clj->js)
        y (-> (map :pz data) clj->js)
        counts (map :count data)
        sum-counts (apply + counts)
        count-pcts (->> (map #(/ % sum-counts) counts) clj->js)
        velos (-> (map :start_speed data) clj->js)
        the-pitches (-> (map :the-pitch data) clj->js)
        x-value (fn [i] (aget x i))
        x-scale (-> (.scaleLinear js/d3)
                    (.domain #js [-1.5 1.5])
                    (.range #js [0 width]))
        x-map (fn [i] (-> (x-value i) x-scale))
        x-axis (-> (.axisBottom js/d3)
                   (.scale x-scale))
        y-value (fn [i] (aget y i))
        y-scale (-> (.scaleLinear js/d3)
                    (.domain #js [1 4])
                    (.range #js [height 0]))
        y-map (fn [i] (-> (y-value i) y-scale))
        y-axis (-> (.axisLeft js/d3)
                   (.scale y-scale))
        svg (-> (.select js/d3 ".chart-area")
                (.append "svg")
                (.attr "width" (+ width (:left margin) (:right margin)))
                (.attr "height" (+ height (:top margin) (:bottom margin)))
                (.append "g")
                (.attr "transform" (str "translate(" (:left margin) "," (:top margin) ")")))
        svg (-> (.selectAll svg "circle")
                (.data (.range js/d3 (count x)))
                .enter
                (.append "circle")
                (.attr "cx" (fn [d] (x-map d)))
                (.attr "cy" (fn [d] (y-map d)))
                (.attr "r" (fn [d] (str (* 200 (aget count-pcts d)) "px")))
                (.on "mouseover" (fn [d] (println
                                          (x-value d)
                                          (aget velos d)
                                          (aget the-pitches d)))))
        svg (-> (.select js/d3 "svg")
                (.append "rect")
                (.attr "x" (x-scale (- 1)))
                (.attr "y" (y-scale 3.417))
                (.attr "width" (- (x-scale 1) (x-scale -1)))
                (.attr "height" (- (y-scale 1.59) (y-scale 3.417)))
                (.style "fill" "none")
                (.style "stroke" "black")
                (.attr "transform" (str "translate(" (:left margin) "," (:top margin) ")")))]))

(def pitch-types
  [:fa :ff :ft :fc :fs :si :sl :cu :kc :ep :ch :sc :kn])

(def pitch-names
  ["Fastball"
   "4-Seam Fastball"
   "2-Seam Fastball"
   "Cut Fastball"
   "Split-finger Fastball"
   "Sinker"
   "Slider"
   "Curveball"
   "Knuckle Curve"
   "Ephuus"
   "Change-up"
   "Screwball"
   "Knuckleball"])

(def pitch-type->name (zipmap pitch-types pitch-names))

(defn cluster-attr
  []
  (let [pitch-cluster (re-frame/subscribe [:pitch-cluster])]
    (fn []
      (let [x (->> (select-keys @pitch-cluster pitch-types)
                   (reduce (fn [acc [k v]]
                             (if v
                               (assoc acc k v)
                               acc)) {})
                   (into [])
                   (sort-by #(- (second %))))
            pt (pitch-type->name (-> x first first))
            velo (:start_speed @pitch-cluster)
            px (:px @pitch-cluster)
            pz (:pz @pitch-cluster)
            pfx_x (:pfx_x @pitch-cluster)
            pfx_z (:pfx_z @pitch-cluster)
            bl (:break_length @pitch-cluster)]
        [:div
         [:div pt]
         [:div velo]
         [:div px]
         [:div pz]
         [:div pfx_x]
         [:div pfx_z]
         [:div bl]]))))


(defn render-histogram
  [data stat props]
  (-> js/d3 (.select "svg") .remove)
  (draw-histogram data stat props))

(defn render-cluster-counts
  [data props]
  (-> js/d3 (.select "svg") .remove)
  (draw-cluster-counts data props))

(defn histogram [args]
  (let [dom-node (reagent/atom nil)]
    (reagent/create-class
     {:component-did-update
      (fn [this old-argv]
        (let [[_ data title stat props] (reagent/argv this)]
          ;; This is where we perform our d3.
          (render-histogram data stat props)))

      :component-did-mount
      (fn [this]
        (let [node (reagent/dom-node this)]
          ;; This will trigger a re-render of the component.
          (reset! dom-node node)))

      :reagent-render
      (fn [data title stat props ...]
        ;; Necessary for Reagent to see that we depend on the dom-node and
        ;; args r/atoms.  Note: we don't render D3 at this point.  We have
        ;; to wait for the update.
        @dom-node
        @data
        [:div
         [box/v-box
          :children
          [[text/title
            :label title
            :level :level2]
           [:div.chart-area]]
          :align :center]])})))


(defn cluster-counts [args]
  (let [dom-node (reagent/atom nil)]
    (reagent/create-class
     {:component-did-update
      (fn [this old-argv]
        (let [[_ data props] (reagent/argv this)]
          ;; This is where we perform our d3.
          (render-cluster-counts data props)))

      :component-did-mount
      (fn [this]
        (let [node (reagent/dom-node this)]
          ;; This will trigger a re-render of the component.
          (reset! dom-node node)))

      :reagent-render
      (fn [data props ...]
        ;; Necessary for Reagent to see that we depend on the dom-node and
        ;; args r/atoms.  Note: we don't render D3 at this point.  We have
        ;; to wait for the update.
        @dom-node
        @data
        [:div
         [box/v-box
          :children
          [[text/title
            :label "Cluster Counts"
            :level :level2]
           [:div.chart-area]
           [cluster-attr]]
          :align :center]])})))
