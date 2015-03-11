
function Server(port) {
    'use strict';
    var _self = this;
    this.subscribers = [];
    this.socket = new WebSocket('ws://localhost:' + port);
    this.socket.onopen = function () {
        console.log('opened');
    };

    this.socket.onmessage = function (e) {
        _self.subscribers.forEach(function (f) {
            f(e.data);
        });
    };
}

Server.prototype.send = function (msg) {
    'use strict';
    this.socket.send(msg);
};

Server.prototype.subscribe = function (cb) {
    'use strict';
    this.subscribers.push(cb);
};

