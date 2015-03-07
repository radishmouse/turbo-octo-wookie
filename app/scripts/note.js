var paper = Snap('.tray');

var noteDataLookup = [
	{/* this line intentionally left blank for 1 instead of 0 */},
	{
		xPosition = 100;
		noteColor = '#C0392B';
	},
	{
		xPosition = 300;
		noteColor = '#27AE60';
	},
	{
		xPosition = 500;
		noteColor = '#2980B9';
	}
];

var songDataLookup = [

];

// Create note constructor
function Note(column){
	this.column = column;
}


// Notes are generated based on the beat of the the music
var columnGenerator = function(BPM,songLength){
	var columnArray = [];
	var beats = (BPM/60)*songLength;

	for (count < beats; count++){
		// randomly choose which column to be in
		var column = Math.floor(Math.random()*3+1);

		// create new svg note
		columnArray.push(new Note(column))
	}
	//return an array of notes to
	return columnArray;
};

var sheetMusic = columnGenerator(120,180);
var noteHolster = [];

// Array of svg circles is generated based on random number array
for (i=0; i < sheetMusic.length; i++){
	noteHolster.push(paper.circle(noteDataLookup[sheetMusic[i].column].xPosition,60,60).attr({fill: noteDataLookup[sheetMusic[i].column].noteColor, opacity: 0.2}));
}

var kickoff = function(){
		var fadeIn = function(note) {note.animate({opacity: 1}, 200, mina.linear, slideDown)},
			slideDown = function() {note.animate({ transform: 'translate(0,400)'}, 200, mina.linear, crossTarget},
			crossTarget = function() {note.animate({ transform: 'translate(0,200)'}, 200, mina.linear, },
			// socket.io to server function for popCheck
			fadeOut = function() {note.animate({opacity: 0}, 200)};

	for (i=0; i < noteHolster.length; i++){
		fadeIn(noteHolster[i]);
	}
};


		note.animate({ transform: 'translate(0,200)'}, 200, mina.linear,
			function (){note.animate({ transform: 'translate(0,400)'}, 200, mina.linear,
				function (){note.animate({ transform: 'translate(0,200)'}, 200, mina.linear,
					))}}});
	}

}



// Note slides down to BPM of song


// noteLeft.animate({r: 50}, 1000);

// Register target to server
	// Register note passing into zone
	// Send to server
// Note pops when it is tapped by the user
// Note fades out when it passes beyond the target zone
