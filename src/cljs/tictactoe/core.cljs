(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce board-size 9)
(defonce row-count 3)
(defonce app-state (atom {:player "X"
                          :squares (vec (repeat board-size nil))}))

(defn info [app-state]
  [:div {:class "game-info"}
   [:div "Next player: " (:player @app-state)]])

(defn square [app-state i]
  (letfn [(next-player [player]
            (case player
              "X" "O"
              "O" "X"))

          (toggle-player [state player]
            (assoc state :player (next-player player)))

          (record-move [state player i]
            (assoc-in state [:squares i] player))

          (square-on-click []
            #(swap! app-state (fn [state]
                                (let [{:keys [player squares]} state]
                                  (if-not (get squares i)
                                    (-> state
                                        (record-move player i)
                                        (toggle-player player))
                                    state)))))]
    [:button.square
     {:key (str "square-" i) :on-click (square-on-click)}
     (get-in @app-state [:squares i])]))

(defn row [app-state i xs]
  (let [square (partial square app-state)]
    [:div.board-row {:key (str "row-" i)} (doall (map #(square %) xs))]))

(defn board [app-state]
  [:div {:class "game-board"}
   (doall (map-indexed #(row app-state %1 %2)
                       (partition row-count (range board-size))))])

(defn game [app-state]
  [:div {:class "game"}
   (board app-state)
   (info app-state)])

(defn render []
  (reagent/render [game app-state] (js/document.getElementById "app")))
