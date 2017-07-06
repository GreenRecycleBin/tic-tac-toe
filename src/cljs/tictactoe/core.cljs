(ns tictactoe.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce board-size 9)
(defonce row-count 3)
(defonce app-state (atom {:player "X"}))

(defn info [app-state]
  [:div {:class "game-info"}
   [:div "Next player: " (:player @app-state)]])

(defn square [i]
  [:button.square {:key (str "square-" i)}])

(defn row [i xs]
  [:div.board-row {:key (str "row-" i)} (doall (map #(square %) xs))])

(defn board []
  [:div {:class "game-board"}
   (doall (map-indexed #(row %1 %2)
                       (partition row-count (range board-size))))])

(defn game [app-state]
  [:div {:class "game"}
   (board)
   (info app-state)])

(defn render []
  (reagent/render [game app-state] (js/document.getElementById "app")))
