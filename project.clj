(defproject pitchfx "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [binaryage/devtools "0.8.2"]
                 [re-frame "0.8.0"]
                 [honeysql "0.8.1"]
                 [org.clojure/java.jdbc "0.6.2-alpha3"]
                 [mysql/mysql-connector-java "5.1.6"]
                 [ring/ring-core "1.2.1"]
                 [ring/ring-jetty-adapter "1.2.1"]
                 [compojure "1.1.6"]
                 [cljs-http "0.1.41"]
                 [re-com "0.9.0"]
                 [cljsjs/fixed-data-table "0.6.3-0"
                  :exclusions [cljsjs/react]]
                 [cljsjs/d3 "4.2.2-0"]
                 [yogthos/config "0.8"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-ring "0.8.10"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]
             :server-port 3000
             :ring-handler pitchfx.core/app}

  :main pitchfx.core

  :ring {:handler pitchfx.core/app}

  :profiles
  {:dev
   {:dependencies []

    :plugins      [[lein-figwheel "0.5.7"]]
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "pitchfx.core/mount-root"}
     :compiler     {:main                 pitchfx.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            pitchfx.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    ]}

  )
