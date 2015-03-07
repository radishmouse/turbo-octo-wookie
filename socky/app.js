var WebSocketServer = require('ws').Server;
var wss1 = new WebSocketServer({port: 8080});

wss1.on('connection', function(ws) {
    'use strict';

    console.log(ws.url);

    ws.send('Welcome input1! Happy to see you!');
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send('You sent ' + message);
    });
});

var wss2 = new WebSocketServer({port: 8081});

wss2.on('connection', function(ws) {
    'use strict';

    ws.send('Welcome input2! Happy to see you!');
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send('You sent ' + message);
    });
});

var wss3 = new WebSocketServer({port: 8083});

wss3.on('connection', function(ws) {
    'use strict';

    ws.send('Welcome game console! Happy to see you!');
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send('You sent ' + message);
    });
});
