var s = Snap(1920,1080);

// Wookie Effects
//Draw wookie parts on the screen
var wookieParts = [
{
	url: 'img/wookie-feet.svg',
	svgName: "wookieFeet"
},
{
	url: 'img/wookie-top-red.svg',
	svgName: 'wookieTopRed'
},
{
	url: 'img/wookie-top-blue.svg',
	svgName: 'wookieTopBlue'
},
{
	url: 'img/bg-stars.svg',
	svgName: 'bgStars'
},
{
	url: 'img/flame1.svg',
	svgName: 'flame1'
},
{
	url: 'img/flame2.svg',
	svgName: 'flame2'
},
{
	url: 'img/lights.svg',
	svgName: 'lights'
},
{
	url: 'img/stage.svg',
	svgName: 'stage'
}
];
var bb;
function loadPart(part, cb) {
	Snap.load(part.url, function(fragment) {
		// var svgName = fragment.select("#" + part.svgName);
		// s.append(svgName);
		s.append(fragment);
		if (cb) {
			cb();
		}
	});
}

loadPart(wookieParts[2], function () {
	// scaleObj('#flame1', 25);
	scaleObj('#wookieTopBlue', 25);
	bb = Snap('#wookieTopBlue').getBBox();
	// var orig = Snap('#wookieTopBlue').transform().string;
	// Snap('#wookieTopBlue').hover(
	//     function(){
	//         Snap('#wookieTopBlue').attr({'transform':'T15,0,' + orig});
	//     },function(){
	//         Snap('#wookieTopBlue').attr({'transform': orig});
	//     });
});
// loadPart(wookieParts[0]);

function scaleObj(obj, pct) {
	// Snap(obj).attr({transform: "s" + pct/100});
	Snap(obj).transform((new Snap.Matrix()).scale(pct/100, pct/100));
}

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

function getInterval() {
	var max = 18;
	var min = 3;
	var fps = Math.floor(Math.random() * max) + min;
	return (1000 / fps);
}

// var toggle = true;

function flameJiggle() {
    setTimeout(function() {
        window.requestAnimationFrame(flameJiggle);

		if (toggle) {
			Snap('#flame1').transform((new Snap.Matrix()).scale(-0.25, 0.25).translate(-250, 50));
		} else {
			Snap('#flame1').transform((new Snap.Matrix()).scale(0.25, 0.25).translate(-30, 50));
		}
		flameJiggle.toggle = !flameJiggle.toggle;
    }, getInterval());
}
flameJiggle.toggle = true;

// flameJiggle();


function rockWookieRock() {
    setTimeout(function() {
        window.requestAnimationFrame(rockWookieRock);

		if (toggle) {
			Snap('#wookieTopBlue').transform((new Snap.Matrix()).scale(-0.25, 0.25).translate(-250, 50));
		} else {
			Snap('#wookieTopBlue').transform((new Snap.Matrix()).scale(0.25, 0.25).translate(-30, 50));
		}
		rockWookieRock.toggle = !rockWookieRock.toggle;
    }, (1000 / 4));
}

rockWookieRock.toggle = true;


function raysAnimation(){
	Snap('#wookieTopBlue').stop().animate(
		{ transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
		10000, // Nice slow turning rays
		function(){
			Snap('#wookieTopBlue').attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the rays.
			raysAnimation(); // Repeat this animation so it appears infinite.
		}
	);

}

// Snap('#wookieTopBlue').transform((new Snap.Matrix()).scale(0.25, 0.25).rotate(30, 0, 0));

// .transform().string


// wookieParts.forEach(function (part) {
// 	console.log(part.url + ': ' + part.svgName);
// });

// for (i=0; i < wookieParts.length; i++){
// };
//Align wookie top and bottoms properly


	// Bounce
		// Whole wookie top slides down
		// Whole wookie comes back up
	// Lean Left
		// Top of wookie rotates around center bottom to the left
		// Returns to center
	// Lean Right
		// Top of wookie rotates around center bottom to the right
		// Returns to center
	// Special Effect
		// Wookie top half slides up
		// Confetti animation


// var generateSvgFile = function(fragment) {
// 	var innerGroup = fragment.select("g");
// 	g.append(innerGroup);
// }







// Snap.load("img/wookie-top-red.svg", generateSvgFile);