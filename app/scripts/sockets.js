
// Singleton that communicates with the WebSockets server
// and provides an internal API for the wookie game
window.SERVER = (function (WS, t) {
    'use strict';


    if (!t) {
        throw Error('Transit.js not installed.');
    }

    var subscribers = [];

    var socket = new WS('ws://localhost:3000/p1');
    var r = t.reader('json');

    socket.onopen = function () {

        console.log('opened');

        socket.send('hey');
        // socket.send('hey boyeee');
    };

    socket.onmessage = function (e) {
        // console.log(e.data);
        // debugger;
        var data = r.read(e.data).g[1];
        subscribers.forEach(function (f) {
            f(data);
        });
    };

    function _send(msg) {
        socket.send(msg);
    }

    function _subscribe(cb) {
        subscribers.push(cb);
    }

    return {
        send: _send,
        subscribe: _subscribe
    };


})(WebSocket, window.transit || null);
