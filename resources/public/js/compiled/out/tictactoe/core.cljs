(ns tictactoe.core
  (:require [historian.core :as hist]
            [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce board-size 9)
(defonce row-count 3)

(defonce app-state (do
                     (hist/replace-library! (atom []))
                     (hist/replace-prophecy! (atom []))
                     (doto (atom {:move 0
                                  :player "X"
                                  :squares (vec (repeat board-size nil))})
                       (hist/record! :app-state))))

(defn move [app-state i]
  (letfn [(jump-to-move [i]
            #(let [move (:move @app-state)
                   distance (- i move)]
               (if (pos? distance)
                 (dotimes [_ distance]
                   (hist/redo!))
                 (dotimes [_ (- distance)]
                   (hist/undo!)))))]
    (let [description (if (zero? i)
                        "Game start"
                        (str "Move #" i))]
      [:li {:key (str "move-" i)}
       [:a {:href "#" :on-click (jump-to-move i)} (if (= i (:move @app-state))
                                                      [:b description]
                                                      description)]])))

(defn moves [app-state]
  [:ol (doall (map (partial move app-state)
                   (range (+ (count @(hist/get-library-atom))
                             (count @(hist/get-prophecy-atom))))))])

(defn all-squares-filled? [state]
  (every? identity (:squares state)))

(defn winner-for-line [squares line]
  (if (apply = (map (partial get squares) line))
    (get squares (first line))))

(defn winning-lines [state]
  (let [lines [[0, 1, 2]
               [3, 4, 5]
               [6, 7, 8]
               [0, 3, 6]
               [1, 4, 7]
               [2, 5, 8]
               [0, 4, 8]
               [2, 4, 6]]]
    (for [line lines
          :when (winner-for-line (:squares state) line)]
      line)))

(defn winning-positions [state]
  (into #{} (flatten (winning-lines state))))

(defn winner [state]
  (let [winning-line (first (winning-lines state))]
    (winner-for-line (:squares state) winning-line)))

(defn status [app-state]
  (if-let [winner (winner @app-state)]
    (str "Winner: " winner)
    (if (all-squares-filled? @app-state)
      (str "It's a draw")
      (str "Next player: " (:player @app-state)))))

(defn info [app-state]
  [:div {:class "game-info"} [:div (status app-state)] (moves app-state)])

(defn square [app-state i]
  (letfn [(next-player [player]
            (case player
              "X" "O"
              "O" "X"))

          (toggle-player [state player]
            (assoc state :player (next-player player)))

          (record-move [state player i]
            (-> state
                (assoc-in [:squares i] player)
                (update-in [:move] inc)))

          (square-on-click []
            #(swap! app-state (fn [state]
                                (let [{:keys [player squares]} state]
                                  (if-not (or (get squares i) (winner state))
                                    (-> state
                                        (record-move player i)
                                        (toggle-player player))
                                    state)))))]
    [:button.square
     {:key (str "square-" i)
      :on-click (square-on-click)
      :class (when (some #{i} (winning-positions @app-state))
              "winning")}
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
