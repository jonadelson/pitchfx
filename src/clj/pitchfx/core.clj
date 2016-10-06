(ns pitchfx.core
  (:require [clojure.java.jdbc :as j]
            [honeysql.core :as sql]
            [honeysql.helpers :refer :all]
            [compojure.core :as c
             :refer [defroutes GET]]
            [compojure.handler :as handler]))

(def db-spec
  {:subprotocol "mysql"
   :subname "//pitchfx.c0oyv4h2ppxp.us-east-1.rds.amazonaws.com:3306/PitchFX"
   :user "root"
   :password "Maxx1492!"})


(def the-query
  (-> (select :*)
      (from [:clusters :c])
      (merge-join [:id_map :m] [:= :m.mlb_id :c.mlb_id]
                  [:fangraphs :f] [:and
                                   [:= :f.playerid :m.fg_id]
                                   [:= :f.Season :c.year]])))

(def res (pr-str (j/query db-spec (sql/format the-query))))

(defroutes app
  (GET "/all_data" []
       {:body (-> (j/query db-spec (sql/format the-query))
                  (pr-str))}))
