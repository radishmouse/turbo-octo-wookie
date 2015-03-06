
# Blantons: the horse and rider

- `lein new mies-node blantons`
- edit/update `project.clj`
    - change the ClojureScript version in `project.clj` to `.2913`
    - add `[socket.io "1.3.4"]` to the `:dependencies
- `lein npm install` to install the `node_modules`
- `lein cljsbuild auto`
- `node run.js`

## Notes:

Sometimes, you have to `lein clean` and manually restart the build process.

Also, you should define a function before you use it, such as with `(def app (.createServer http handler))`

