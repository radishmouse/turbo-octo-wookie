(ns chord.example.handler
  (:require [ring.util.response :refer [response resource-response]]
            [compojure.core :refer [defroutes GET ANY]]
            [compojure.route :refer [resources]]
            [chord.http-kit :refer [wrap-websocket-handler]]
            [clojure.core.async :refer [<! >! put! close! go-loop]]
            [hiccup.page :refer [html5 include-js]]
            [simple-brepl.service :refer [brepl-js]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.basic-authentication :refer [wrap-basic-authentication]]))

; (defn page-frame []
;   (html5
;    [:head
;     [:script (brepl-js)]
;     [:title "Chord Example"]
;     (include-js "/js/chord-example.js")]
;    [:body [:div#content]]))

(defn ws-handler [{:keys [ws-channel] :as req}]
  (println "Opened connection from" (:remote-addr req))
  (go-loop []
    (when-let [{:keys [message error] :as msg} (<! ws-channel)]
      (prn "Message received:" msg)
      (>! ws-channel (if error
                       (format "Error: '%s'." (pr-str msg))
                       {:received (format "You passed: '%s' at %s." (pr-str message) (java.util.Date.))}))
      (recur))))

(defroutes app-routes
  (GET "/" [] (resource-response "index.html"))
  ; (GET "/" [] (response (page-frame)))
  (GET "/ws" [] (-> ws-handler
                    (wrap-websocket-handler {:format :transit-json})))
  (ANY "/ajax" []
    (-> (fn [{:keys [body-params] :as req}]
          (response {:you-said body-params
                     :req (dissoc req :async-channel :body)}))

        (wrap-restful-format :formats [:edn :json-kw])
        (wrap-basic-authentication #(do
                                      (prn %&)
                                      true))))

  (resources "/scripts" {:root "scripts"})
  (resources "/stylesheets" {:root "stylesheets"})
  (resources "/bower_components" {:root "bower_components"})
  ; (resources "/js" {:root "js"}))
  ; (resources "/static" {:root "static"}))
  ; (resources "/static" {:root "static"}))
  )

; a ring application boils down to a function which takes a request map
; and returns a response map.
(def app
  ; using #' means that we refer to the symbol app-routes, and not the value it points to
  #'app-routes)
