
var CURRENT_GAME_MOVE = null;

// Constructor for one round of game play.
function GameRound(_moveType) {
    'use strict';

    this.moveType = _moveType || 0;
    this.isWindowOpen = false;
    // this.didPop = false;
}

// This is an array of valid moves.
// They will be identified by integers. (Yucky ambiguity)
GameRound.MOVES = [
    {}, // 0
    {}, // 1
    {}, // 2
    {}, // 3
    {}  // 4
];

GameRound.prototype.isMoveCorrect = function (serverResp) {
    'use strict';

    // make sure we've got an integer
    var playerMove = parseInt(serverResp, 10);
    var isCorrect = this.isWindowOpen && (playerMove === this.moveType);
    console.log('Move is ' + (isCorrect ? 'GOOD!!!' : 'incorrect'));
    return isCorrect;
};

GameRound.prototype.windowOpen = function () {
    'use strict';
    // Signal the server that the pop window is open.
    CURRENT_GAME_MOVE = this;
    this.isWindowOpen = true;
};

GameRound.prototype.windowClose = function () {
    'use strict';
    // Signal the server that the pop window is now closed.
    CURRENT_GAME_MOVE = null;
    this.isWindowOpen = false;
};


