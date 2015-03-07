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
	url: 'img/lights.svg',
	svgName: 'lights'
},
{
	url: 'img/stage.svg',
	svgName: 'stage'
}
];


function loadPart(part) {
	Snap.load(part.url, function(fragment) {
		var svgName = fragment.select("#" + part.svgName);
		s.append(svgName);
	});
}



wookieParts.forEach(function (part) {
	console.log(part.url + ': ' + part.svgName);
});	

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