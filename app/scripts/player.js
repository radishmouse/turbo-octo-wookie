
function Player(socket) {
    'use strict';

    this.socket = socket;
    this.score = 0;

    this.socket.subscribe(function (message) {
        // what are we receiving again?
        // oh, right, each game, there are many game rounds
        // each game round has an open state and a correct move.
        // we receive data from the server
        // and so this `message` lets the player tell the game board what happened in real life
        console.log(message);

        // this

    });
}

Player.prototype.setCurrentMove = function (gameMove) {
    // gameMove.isMoveCorrect()
};
