(defproject blantons "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2913"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [socket.io "1.3.4"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "blantons"
              :source-paths ["src"]
              :compiler {
                :output-to "out/blantons.js"
                :output-dir "out"
                :target :nodejs
                :optimizations :none
                :source-map true}}]})
