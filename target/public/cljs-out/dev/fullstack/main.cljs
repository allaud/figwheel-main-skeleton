(ns fullstack.main
  (:require [reagent.core :as r]))

(defonce state (r/atom {
                        :title "Okayish"
                        :body "some body text to change..."
                        }))



(defn main [name]
  [:div
   [:h1 (:title @state)]
    [:button {:on-click #(swap! state assoc :title "Test title..")} "push me" ]
    [:p "Hi, I am asdasd!"]])


(defn run []
  (r/render [main]
            (js/document.getElementById "app")))

(run)



