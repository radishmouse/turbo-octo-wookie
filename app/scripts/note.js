var paper = Snap('.tray'),
	// noteLeft = paper.circle(100,60,60),
	// noteCenter = paper.circle(300,60,60),
	// noteRight = paper.circle (500,60,60),
	noteTranslationDuration = 1700,
	songLength = 0;

noteLeft.attr({
	fill: '#C0392B'
});

noteCenter.attr({
	fill: '#27AE60'
});

noteRight.attr({
	fill: '#2980B9'
});

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

// Create note constructor
function Note(column){
	this.column = column;
}


// Notes are generated based on the beat of the the music
var noteGenerator = function(BPM,songLength){
	var daNotes = [];
	var beats = (BPM/60)*songLength;

	for (count < beats; count++){
		// randomly choose which column to be in
		var column = Math.floor(Math.random()*3+1);

		// create new svg note
		daNotes.push(new Note(column))		
	}
	//return an array of notes to
	return daNotes; 
};

var sheetMusic = noteGenerator(120,180);
var noteHolster = [];

// Note fades in on beat until song is done
for (i=0; i < daNotes.length; i++){
	noteHolster.push(paper.circle(noteDataLookup[sheetMusic[0].column].xPosition,60,60));
}
		


// Note slides down to BPM of song
noteLeft.animate({opacity: 0.2}, 1000);
noteLeft.animate({ transform: 'translate(0,900)'}, noteTranslationDuration)
// noteLeft.animate({r: 50}, 1000);

// Register target to server
	// Register note passing into zone
	// Send to server
// Note pops when it is tapped by the user
// Note fades out when it passes beyond the target zone