(ns pitchfx.data-table
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [cljsjs.fixed-data-table]))

(def Table (reagent/adapt-react-class js/FixedDataTable.Table))
(def Column (reagent/adapt-react-class js/FixedDataTable.Column))
(def Cell (reagent/adapt-react-class js/FixedDataTable.Cell))

(def col-kws
  [:name
   :season
   :team
   :tbf
   :war
   :fip
   :k9
   :bb9
   :hr9
   :hr_fb
   :gb_pct
   :fb_pct])

(def col-strs
  (map name col-kws))

(def col-names
  ["Name"
   "Season"
   "Team"
   "TBF"
   "WAR"
   "FIP"
   "K/9"
   "BB/9"
   "HR/9"
   "HR/FB"
   "GB %"
   "FB %"])

(def col-specs
  (mapv #(vector %1 %2)
        col-strs
        col-names))

(defn data-grid []
  (let [data (re-frame/subscribe [:filtered])
        pitcher-chosen? (re-frame/subscribe [:pitcher-chosen?])
        chosen-pitcher (re-frame/subscribe [:chosen-pitcher])]
    (fn []
      (when @data
        (let [data (mapv #(zipmap col-strs ((apply juxt col-kws) %)) @data)
              make-cell (fn [args]
                          (let [{:strs [columnKey rowIndex]} (js->clj args)]
                            (reagent/as-element [Cell (get-in data [rowIndex columnKey])])))]
          [:div
           [Table {:width        900
                   :height       700
                   :rowHeight    50
                   :rowsCount    (count data)
                   :headerHeight 50
                   :onRowClick #(println "clicked")}
            (->> (for [[k n] col-specs]
                   ^{:key n} [Column {:header n :cell make-cell :columnKey k :width 100}]))]])))))
