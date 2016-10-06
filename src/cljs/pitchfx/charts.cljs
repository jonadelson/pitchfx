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
                (.on "mouseover" (fn [d] (let [transition (-> (.transition tip)
                                                              (.duration 200)
                                                              (.style "opacity" 0.9))
                                               ny (->> d (into #{}) (mapcat stat->name-year) (into #{}))]

                                           (-> tip
                                               (.html (str "<div>" (->> (map #(str "<div>" % "</div>") ny) (apply str)) "</div>"))
                                               (.style "left" (str (.-pageX (.-event js/d3)) "px"))
                                               (.style "top" (str (- (.-pageY (.-event js/d3)) 50) "px"))))))
                (.on "mouseout" (fn [d] (-> tip
                                           .transition
                                           (.duration 500)
                                           (.style "opacity" 0)))))
        bar (-> (.append bar "text")
                (.attr "dy" ".75em")
                (.attr "y" 200)
                (.attr "x" (/ (- (x (-> (aget bins 0) .-x1)) (x (-> (aget bins 0) .-x0))) 2))
                (.attr "text-anchor" "middle")
                (.text (fn [d] (formatCount (.-length d)))))
        svg (-> (.append svg "g")
                (.attr "class" "axis axis--x")
                (.attr "transform" (str "translate(0," height ")"))
                (.call (.axisBottom js/d3 x)))
        svg (-> (.append svg "g")
                (.attr "class" "axis axis--y")
                (.attr "transform" (str "translate(0," (- height)")"))
                (.call (.axisLeft js/d3 y)))
        ;;tip
        #_(-> (.tip js/d3)
                (.attr "class" "d3-tip")
                (.offset #js [-10 0])
                (.html (fn [d] )))]))

(defn render-histogram
  [data stat props]
  (-> js/d3 (.select "svg") .remove)
  (draw-histogram data stat props))


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
