var WebSocketServer = require('ws').Server;
var MAX = 24; // 1.5 seconds of data


// Gyroscope
// Accelerometer


function processUserDirection(obj) {
    'use strict';

    // get the average of the accel values
    // if it is < -250 then we are moving left
    // if it is > 250 then we are moving right
    // var avgAccel = (obj.a.reduce(function (curr, prev) {
    //     return curr.x + prev;
    // }, 0))/obj.a.length;

    var sum = 0;
    for(var i=0; i<obj.a.length; i++) {
        console.log(obj.a[i].x);
        sum = sum + obj.a[i].x;
    }

    var avgAccel = sum/obj.a.length;

    console.log('avg: ' + avgAccel);

    // DEFAULT to center;
    var move = 1;

    if (avgAccel < -250) {
        // LEFT
        move = 0;
    } else if (avgAccel > 250) {
        // RIGHT
        move = 2;
    }

    return move;
}

function processShake(obj) {
    'use strict';

    // get the average of the accel values
    // if it is < -250 then we are moving left
    // if it is > 250 then we are moving right

    var sumY = 0;
    var sumZ = 0;
    var sum = 0;
    for(var i=0; i<obj.g.length; i++) {
        console.log(obj.g[i].y);
        console.log(obj.g[i].z);
        sumY = sumY + obj.g[i].y;
        sumZ = sumZ + obj.g[i].z;
    }

    sum = sumY + sumZ;

    var avgGyro = sum/obj.g.length;

    console.log('avg gyro: ' + avgGyro);

    // DEFAULT to center;
    var isShaking = 0;

    if (avgGyro < -2.5) {
        isShaking = 1;
    }

    return isShaking;
}





console.log('starting!');

var player1Sock;
var player2Sock;
var player1Moves = {
    a: [],
    g: []
};

var player2Moves = {
    a: [],
    g: []
};

//============================================================
// Player 1 sensors
//============================================================
var accel1 = new WebSocketServer({port: 8080});
accel1.on('connection', function(ws) {
    'use strict';

    console.log(ws.url);

    ws.send('Welcome accel1! Happy to see you!');
    ws.on('message', function(message) {
        crunchPlayer1({
            a: message.Accelerometer
        });
    });
});

var gyro1 = new WebSocketServer({port: 8082});
gyro1.on('connection', function(ws) {
    'use strict';

    console.log(ws.url);

    ws.send('Welcome gyro1! Happy to see you!');
    ws.on('message', function(message) {
        crunchPlayer1({
            g: message.Gyroscope
        });
    });
});

//============================================================
// Player 2 sensors
//============================================================
var accel2 = new WebSocketServer({port: 8081});
accel2.on('connection', function(ws) {
    'use strict';

    ws.send('Welcome accel2! Happy to see you!');
    ws.on('message', function(message) {
        crunchPlayer2({
            a: message.Accelerometer
        });
    });
});


var gyro2 = new WebSocketServer({port: 8083});
gyro2.on('connection', function(ws) {
    'use strict';

    ws.send('Welcome gyro2! Happy to see you!');
    ws.on('message', function(message) {
        crunchPlayer2({
            g: message.Gyroscope
        });
    });
});


//============================================================
// Put the data into the arrays
//============================================================

function crunchPlayer1(data) {
    'use strict';

    if (data.a) {
        player1Moves.a.push(data.a);
        while (player1Moves.a.length > MAX) {
            player1Moves.a.unshift();
        }
    }
    if (data.g) {
        player1Moves.g.push(data.g);
        while (player1Moves.g.length > MAX) {
            player1Moves.g.unshift();
        }
    }
    if (player1Sock) {
        player1Sock.send({
            move: processUserDirection(player1Moves),
            shake: processShake(player1Moves)
        });
    }
}


function crunchPlayer2(data) {
    'use strict';

    if (data.a) {
        player2Moves.a.push(data.a);
        while (player2Moves.a.length > MAX) {
            player2Moves.a.unshift();
        }
    }
    if (data.g) {
        player2Moves.g.push(data.g);
        while (player2Moves.g.length > MAX) {
            player2Moves.g.unshift();
        }
    }
    if (player2Sock) {
        player2Sock.send({
            move: processUserDirection(player2Moves),
            shake: processShake(player2Moves)
        });
    }
}

//============================================================
// WebSockets
//============================================================


var wss3 = new WebSocketServer({port: 8085});

wss3.on('connection', function(ws) {
    'use strict';

    player1Sock = ws;

    ws.send('Welcome player1! Happy to see you!');
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send('You sent ' + message);
    });
});

var wss4 = new WebSocketServer({port: 8086});

wss4.on('connection', function(ws) {
    'use strict';

    player2Sock = ws;

    ws.send('Welcome player2! Happy to see you!');
    ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send('You sent ' + message);
    });
});
