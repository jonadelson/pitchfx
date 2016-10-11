(ns pitchfx.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(def cluster-cols
  (map #(-> (str "cluster_" %) keyword) (range 500)))

(def pitch-types
  [:fa :ff :ft :fc :fs :si :sl :cu :kc :ep :ch :sc :kn])

(def cluster-props
  [:start_speed :px :pz :pfx_x :pfx_z :break_length])

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

(defn window-dims
  [db _]
  (get db :window-dims))

(defn pitch-cluster
  [db _]
  (let [pitch-cluster (get db :pitch-cluster)
        cluster-attrs (get db :cluster-attrs)]
    (when pitch-cluster
      (->> (filter #(= pitch-cluster (:cluster %)) cluster-attrs)
           first))))

(defn pitch-counts
  [db _]
  (let [app-data (get db :app-data)
        cluster-choice (get db :cluster-choice)
        group-choice (get db :chosen-group)
        pitcher-chosen? (get db :pitcher-chosen?)
        chosen-pitcher (get db :chosen-pitcher)
        filtered (when (and cluster-choice group-choice)
                   (->> app-data
                        (filter #(= (get % (-> (str "c" cluster-choice) keyword))
                                    (dec group-choice)))))
        cluster-attrs (get db :cluster-attrs)
        pitch-counts (->> (map #(select-keys % pitch-types) cluster-attrs)
                          (map (fn [p-map]
                                 (reduce (fn [p [k v]]
                                           (if (> v (p-map p))
                                             k
                                             p)) p-map))))
        pitch-attrs (map #(select-keys % cluster-props) cluster-attrs)]
    (->> (map (apply juxt cluster-cols) filtered)
         (map (fn [c] (map #(if % % 0) c)))
         (apply map +)
         (map (fn [c] {:count c}))
         (map #(merge {:the-pitch %1} %2) pitch-counts)
         (mapv #(merge %1 %2) pitch-attrs))))

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
(re-frame/reg-sub :window-dims window-dims)
(re-frame/reg-sub :pitch-cluster pitch-cluster)
(re-frame/reg-sub :pitch-counts pitch-counts)
