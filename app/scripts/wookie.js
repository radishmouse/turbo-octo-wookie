var s = Snap(1920,1080);

// Wookie Effects
//Draw wookie parts on the screen

loadPart(wookieParts[2], function () {
	scaleObj('#wookieTopBlue', 25);
	var orig = Snap('#wookieTopBlue').transform().string;
	Snap('#wookieTopBlue').hover(
	    function(){
	        Snap('#wookieTopBlue').attr({'transform':'T15,0,' + orig});
	    },function(){
	        Snap('#wookieTopBlue').attr({'transform': orig});
	    });

});
// loadPart(wookieParts[0]);

function scaleObj(obj, pct) {
	Snap(obj).attr({transform: "S" + pct/100});
}

// .transform().string


// wookieParts.forEach(function (part) {
// 	console.log(part.url + ': ' + part.svgName);
// });

loadPart(wookieParts[8]);

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