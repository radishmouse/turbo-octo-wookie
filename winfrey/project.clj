; macro from leiningen for configuring a project
(defproject jarohen/chord.example ""
  :description "An example project to show Chord in action"
  :url "https://github.com/james-henderson/chord/example-project"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha4"]
                 [jarohen/chord "0.6.0"]

                 [ring/ring-core "1.2.0"] ; like python's wsgi, but for clojure
                 [compojure "1.1.5"] ; routing library
                 [hiccup "1.0.4"] ; you write clojure data structures, it outputs html
                 [ring-middleware-format "0.4.0"] ; deserializes data (JSON, Transit, EDN, etc.) sent in request bodies
                 [ring-basic-authentication "1.0.5"] ; ring middleware for basic auth

                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/clojurescript "0.0-2727"]

                 [jarohen/flow "0.3.0-alpha3"] ; helps with writing front end js code in cljs
                 ]

  :plugins [[lein-pdo "0.1.1"] ; for running tasks in parallel
            [jarohen/lein-frodo "0.4.1"] ; starts a Ring server with configs written in Nomad
            ; [lein-cljsbuild "1.0.3"]
            [lein-shell "0.4.0"]; for calling shell commands from lein
            [jarohen/simple-brepl "0.2.1"]
            [lein-ring "0.9.2"]]


  :exclusions [org.clojure/clojure]

  ; in this .edn file, we tell Ring to use our handler/app function
  :frodo/config-resource "chord-example.edn"

  :aliases {"serve" ["pdo" "frodo"]}
  ; lein commands for convenience
  ; :aliases {"dev" ["do"
  ;                  ["shell" "mkdir" "-p"
  ;                   "target/resources"]
  ;                  ["pdo"
  ;                   ["cljsbuild" "auto"]
  ;                   "frodo"]]}

  :source-paths ["src"]

  ; :resource-paths ["resources" "target/resources"]
  :resource-paths ["resources" "static"]

  ; :cljsbuild {:builds [{:source-paths ["src"]
  ;                       :compiler {:output-to "target/resources/js/chord-example.js"
  ;                                  :optimizations :whitespace
  ;                                  :pretty-print true}}]}
  )
