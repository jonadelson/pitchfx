(ns pitchfx.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(defn app-data
  [db _]
  (get db :app-data))

(defn chosen-group
  [db _]
  (get db :chosen-group))

(defn cluster-choices
  [db _]
  (get db :cluster-choices))

(defn cluster-choice
  [db _]
  (get db :cluster-choice))

(defn filtered
  [db _]
  (let [app-data (get db :app-data)
        cluster-choice (get db :cluster-choice)
        group-choice (get db :chosen-group)
        pitcher-chosen? (get db :pitcher-chosen?)
        chosen-pitcher (get db :chosen-pitcher)]
    (when (and cluster-choice group-choice)
      (->> app-data
           (filter #(= (get % (-> (str "c" cluster-choice) keyword))
                       (dec group-choice)))))))

(defn view
  [db _]
  (get db :view))

(defn chosen-pitcher
  [db _]
  (get db :chosen-pitcher))

(defn pitcher-chosen?
  [db _]
  (get db :pitcher-chosen?))

(defn chosen-stat
  [db _]
  (get db :chosen-stat))

(defn loaded?
  [db _]
  (get db :loaded?))

(re-frame/reg-sub :chosen-group chosen-group)
(re-frame/reg-sub :app-data app-data)
(re-frame/reg-sub :cluster-choices cluster-choices)
(re-frame/reg-sub :cluster-choice cluster-choice)
(re-frame/reg-sub :filtered filtered)
(re-frame/reg-sub :view view)
(re-frame/reg-sub :chosen-pitcher chosen-pitcher)
(re-frame/reg-sub :pitcher-chosen? pitcher-chosen?)
(re-frame/reg-sub :chosen-stat chosen-stat)
(re-frame/reg-sub :loaded? loaded?)
