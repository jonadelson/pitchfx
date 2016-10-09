(ns pitchfx.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [devtools.core :as devtools]
            [pitchfx.handlers]
            [pitchfx.subs]
            [pitchfx.views :as views]
            [pitchfx.config :as config]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.reader :as r]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")
    (devtools/install!)))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (go (let [all-data (<! (http/get "/all_data"))
            cluster-attrs (<! (http/get "/cluster_attrs"))]
        (re-frame/dispatch [:set-app-data (->> all-data :body r/read-string)])
        (re-frame/dispatch [:set-cluster-attrs (->> cluster-attrs :body r/read-string)])
        (re-frame/dispatch [:set-window-dims [js/window.innerWidth js/window.innerHeight]])
        (re-frame/dispatch [:set-loaded true])))
  (dev-setup)
  (mount-root))
