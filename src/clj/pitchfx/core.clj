(ns pitchfx.core
  (:require [clojure.java.jdbc :as j]
            [honeysql.core :as sql]
            [honeysql.helpers :refer :all]
            [compojure.core :as c
             :refer [defroutes GET]]
            [compojure.handler :as handler]
            [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(def db-spec
  {:subprotocol "mysql"
   :subname "//pitchfx.c0oyv4h2ppxp.us-east-1.rds.amazonaws.com:3306/PitchFX"
   :user "root"
   :password "Maxx1492!"})

(def cluster-cols (map #(str "cluster_" %) (range 500)))

(def main-query
  (-> (select :*)
      (from [:clusters :c])
      (merge-join [:id_map :m] [:= :m.mlb_id :c.mlb_id]
                  [:fangraphs :f] [:and
                                   [:= :f.playerid :m.fg_id]
                                   [:= :f.Season :c.year]]
                  [:pitch_counts :p] [:and
                                      [:= :c.mlb_id :p.mlb_id]
                                      [:= :c.year :p.year]])))

(def cluster-attrs
  {:select [:*]
   :from [:cluster_attrs]})

(defroutes app
  (GET "/all_data" []
       {:body (-> (j/query db-spec (sql/format main-query))
                  (pr-str))})
  (GET "/cluster_attrs" []
       {:body (-> (j/query db-spec (sql/format cluster-attrs))
                  (pr-str))}))

(defn -main [& args]
  (let [port "3000"]
    (run-jetty app {:port port :join? false})))
