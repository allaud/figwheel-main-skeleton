(defproject fullstack "0.1"
  :description "A minimal sample full-stack Clojure(Script) website"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [com.bhauman/figwheel-main "0.1.9"]
                 [org.clojure/clojurescript "1.10.339"]]
  :plugins [[cider/cider-nrepl "0.18.0"]]
  :repl-options {
                 :host "0.0.0.0"
                 :port 7888}
  :profiles {:dev
             {:dependencies [[org.clojure/clojurescript "1.10.339"]
                             [com.bhauman/figwheel-main "0.1.9"]
                             [cider/piggieback "0.3.8"]]
              :resource-paths ["target"]
              :clean-targets ^{:protect false} ["target"]
              :repl-options {:nrepl-middleware [cider.piggieback/wrap-cljs-repl]}}})
