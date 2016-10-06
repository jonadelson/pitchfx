(ns pitchfx.handlers
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [pitchfx.db :as db]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! take!]]
            [clojure.reader :as r]))

(def app-db
  {:chosen-group nil
   :cluster-choice nil
   :cluster-choices (->> (for [i (range 10 210 10)]
                           {:id i :label (str i)})
                         (into []))
   :app-data nil
   :chosen-pitcher nil
   :view :data
   :pitcher-chosen? false
   :chosen-stat :war})

(defn set-app-data
  [db [_ response]]
  (assoc db :app-data response))

(defn set-cluster-choice
  [db [_ n]]
  (assoc db :cluster-choice n))

(defn set-chosen-group
  [db [_ n]]
  (assoc db :chosen-group n))

(defn dec-chosen-group
  [db [_ n]]
  (assoc db :chosen-group (dec n)))

(defn inc-chosen-group
  [db [_ n]]
  (assoc db :chosen-group (inc n)))

(defn change-view
  [db [_ v]]
  (assoc db :view v))

(defn change-pitcher
  [db [_ p]]
  (assoc db :chosen-pitcher p))

(defn set-pitcher-chosen
  [db [_ t]]
  (assoc db :pitcher-chosen? t))

(defn set-chosen-stat
  [db [_ s]]
  (assoc db :chosen-stat s))

(re-frame/reg-event-db :initialize-db (fn [_] app-db))
(re-frame/reg-event-db :set-app-data set-app-data)
(re-frame/reg-event-db :set-cluster-choice set-cluster-choice)
(re-frame/reg-event-db :set-chosen-group set-chosen-group)
(re-frame/reg-event-db :dec-chosen-group dec-chosen-group)
(re-frame/reg-event-db :inc-chosen-group inc-chosen-group)
(re-frame/reg-event-db :change-view change-view)
(re-frame/reg-event-db :change-pitcher change-pitcher)
(re-frame/reg-event-db :set-pitcher-chosen set-pitcher-chosen)
(re-frame/reg-event-db :set-chosen-stat set-chosen-stat)