
(function (GameType) {
    'use strict';

    // on load, create a Game
    // create two players, assign them to Game
    // create two sockets, assign them to each player
    // load a song, and kick off the game play
    //
    // after the song, report the score.
    window.theGame = new GameType();
})(window.Game);
