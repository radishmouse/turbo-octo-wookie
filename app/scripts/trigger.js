var socket = new WebSocket('ws://172.20.3.194:8085');

socket.onopen = function () {
  console.log('opened');
};

socket.onmessage = function (e) {
  try {
    var data = JSON.parse(e.data);
    console.log(data.move);

    if (data.move === "L") {
      danceLeft();
    }
    if (data.move === "R") {
      danceRight();
    }
    if (data.move === "B") {
      bounce();
    }
    if (data.move === "S") {
      shake();
    }


  } catch (e) {
    console.log(e);
  }

};

// function wookieLeft(L) {
// console.log("Movin' left");
// danceLeft();
// }

// function wookieRight(R) {
//     console.log("Movin' right");
// }

// function wookieUp() {
//     console.log("Movin' up to the WEST side!");
//     console.log("To a DElux warehouse in the ghetto-o-o");
// }

// function wookieDown() {
//     console.log("Movin' down");
// }
