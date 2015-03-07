var socket = new WebSocket("ws://ws-server.local:8081");
socket.onopen = function (e) {
    console.log("opened");

    socket.send('hey');
    socket.send('hey boyeee');
};
socket.onmessage = function (e) {
    console.log(e.data);
};

