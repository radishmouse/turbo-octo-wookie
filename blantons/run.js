try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/blantons.js");
goog.require("blantons.core");
goog.require("cljs.nodejscli");
