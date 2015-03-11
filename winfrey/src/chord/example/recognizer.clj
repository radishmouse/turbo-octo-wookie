(ns chord.example.recognizer)

(defn h-motion [[x & rest]]
    (if (< x 100)
        -1
        1)
  )
