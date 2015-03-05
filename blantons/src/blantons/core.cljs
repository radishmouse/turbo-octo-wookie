(ns blantons.core
  (:require [cljs.nodejs :as node]))

(node/enable-util-print!)

(def *port* 3000)
(def __dirname (js* "__dirname"))
(def fs (node/require "fs"))

(def http (node/require "http"))

(defn handler [req res]
  (let [index (str __dirname "/../../index.html")]
    (println index)
    (.readFile fs index (fn [err data]
                          (if (nil? err)
                            (do
                              (.writeHead res 200)
                              (.end res data))
                            (do
                              (.writeHead res 500)
                              (.end res "Oh snap. You gots an errorz"))
                            )))))

(def app (.createServer http handler))
(def socket-io (node/require "socket.io"))
(def io (socket-io app))

(defn -main []
  (println "Hello world!")
  (.listen app *port* (fn []
                      (println "Listening on port" *port*)))
  (.on io "connection" (fn [socket]
                         (println "User connected")
                         (.emit socket "news" {
                                               :hello "world"})
                         (.on socket "my other event" (fn [data]
                                                        (println data))))))

(set! *main-cli-fn* -main)

