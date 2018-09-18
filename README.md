
Run:

    > docker run -v `pwd`:/app -w '/app' -p9500:9500 -p7888:7888 -it clojure:lein /bin/bash
    > lein repl
    (require 'figwheel.main.api)
    (figwheel.main.api/start {:mode :serve} "dev")
    (figwheel.main.api/cljs-repl "dev")
    
Vim:
    :Piggieback (figwheel.main.api/repl-env "dev") 
