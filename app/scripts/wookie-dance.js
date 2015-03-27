var danceReset = function () { 
  $('#wookie-top-blue').removeClass('left-dance');
	$('#wookie-top-blue').removeClass('right-dance');
	$('#wookie-top-blue').removeClass('bounce');
	$('#wookie-top-blue').removeClass('shake');
}

var fixit = function () {

  setTimeout(function() {
    danceReset();
  }, 5000);
}

var danceLeft = function (){
  console.log("jeff's code")
  $('#wookie-top-blue').addClass('left-dance');
  fixit();
};

var danceRight = function(){
  $('#wookie-top-blue').addClass('right-dance');
  fixit();
};

var bounce = function(){
  $('#wookie-top-blue').addClass('bounce');
  fixit();
};

var shake = function(){
  $('#wookie-top-blue').addClass('shake');
  fixit();
};

// function whichTransitionEvent(){
//     var t;
//     var el = document.createElement('fakeelement');
//     var transitions = {
//       'transition':'transitionend',
//       'OTransition':'oTransitionEnd',
//       'MozTransition':'transitionend',
//       'WebkitTransition':'webkitTransitionEnd'
//     }

//     for(t in transitions){
//         if( el.style[t] !== undefined ){
//             return transitions[t];
//         }
//     }
// }

// /* Listen for a transition! */
// var transitionEvent = whichTransitionEvent();
// transitionEvent && e.addEventListener(transitionEvent, function() {
//   console.log('Transition complete!  This is the callback, no library needed!');
//   danceReset();
// });
