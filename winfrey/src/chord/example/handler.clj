(ns chord.example.handler
  (:require [ring.util.response :refer [response resource-response]]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [resources]]
            [chord.http-kit :refer [wrap-websocket-handler with-channel]]
            [clojure.core.async :refer [<! >! put! close! go-loop go]]
            [hiccup.page :refer [html5 include-js]]
            [simple-brepl.service :refer [brepl-js]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.basic-authentication :refer [wrap-basic-authentication]]
            ; [chord.example.utils :refer [tick]]
            ))

(def clients (atom {}))

(defn player-handler [{:keys [ws-channel] :as req}]
  "For a websockets connection, stream gestures"
  (println "Opened connection from" (:remote-addr req))
  (swap! clients assoc ws-channel true)
  (println ws-channel " connected")
  (println clients)
  ; (go-loop []
  ;          (>! ws-channel
  ;              {:gesture (format "L")})
  ;          (Thread/sleep 500)
  ;          (recur))
  )

(defn send-to-players [data]
  (prn (str "going to send data: " data))
  ; (go (doall (map (fn [con]
  ;        (println (str "sending " data " to " con))
  ;        (>! con {:gesture (format "m: " data)}))
  ;      (keys @clients))))
  )

(defn accel-handler [{:keys [ws-channel] :as req}]
  "For a websockets connection, stream gestures"
  (go-loop []
    (when-let [{:keys [message error] :as msg} (<! ws-channel)]
      (prn "Message received:" msg)
      (println (keys @clients))
      (send-to-players msg)
      (>! ws-channel (if error
                       (format "Error: '%s'." (pr-str msg))
                       {:received (format "You passed: '%s' at %s." (pr-str message) (java.util.Date.))}))

      (recur))); (tick 500 (go (>! ws-channel
  ;                 {:gesture (format "L")})))
  ; (with-channel req con
  ;   (go
  ;     (swap! clients assoc con true)
  ;     (println con " connected"))
  ;   ; (on-close con (fn [status]
  ;   ;                 (swap! clients dissoc con)
  ;   ;                 (println con " disconnected. status: " status)))
  ;   )
  ; (go-loop []
  ;          (>! ws-channel
  ;              {:gesture (format "L")})
  ;          (Thread/sleep 500)
  ;          (recur))
  )

(defroutes app-routes
  (GET "/" [] (resource-response "index.html"))
  ; (GET "/" [] (response (page-frame)))
  (GET "/a1" [] (-> accel-handler
                    (wrap-websocket-handler {:format :transit-json})))
  (GET "/p1" [] (-> player-handler
                    (wrap-websocket-handler {:format :transit-json})))
  (GET "/p2" [] (-> player-handler
                    (wrap-websocket-handler {:format :transit-json})))
  ; (ANY "/ajax" []
  ;   (-> (fn [{:keys [body-params] :as req}]
  ;         (response {:you-said body-params
  ;                    :req (dissoc req :async-channel :body)}))

  ;       (wrap-restful-format :formats [:edn :json-kw])
  ;       (wrap-basic-authentication #(do
  ;                                     (prn %&)
  ;                                     true))))

  ; static assets, yo.
  (resources "/scripts" {:root "scripts"})
  (resources "/stylesheets" {:root "stylesheets"})
  (resources "/bower_components" {:root "bower_components"})
  )

; a ring application boils down to a function which takes a request map
; and returns a response map.
(def app
  ; using #' means that we refer to the symbol app-routes, and not the value it points to
  #'app-routes)

