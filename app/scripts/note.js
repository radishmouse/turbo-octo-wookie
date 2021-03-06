// var paper = Snap('');


var noteDataLookup = [
	0,
	'noteLeft',
	'noteCenter',
	'noteRight'
];

// var songDataLookup = [
//     {
//         songName: 'Barracuda',
//         BPM: 138,
//         songLength: 259
//     },
//     {
//         songName: 'Smells Like Teen Spirit',
//         BPM: 120,
//         songLength: 262
//     },
//     {
//         songName: 'Sweet Child Of Mine',
//         BPM: 128,
//         songLength: 348
//     }
// ];

// // Create note constructor
// function Note(column){
//  this.column = column;
// }

var songNumber = 0;
var noteArray = [];

// Notes are generated based on the beat of the the music
var columnGenerator = function(BPM,songLength){

	var beats = (BPM/60)*songLength;

	for (count = 0;count < beats; count++){
		// randomly choose which column to be in
		var column = Math.floor(Math.random()*3+1);

		// create new svg note
		// var newNote = paper.circle(noteDataLookup[column].xPosition,60,60).attr({fill: noteDataLookup[column].noteColor, opacity: 0})
		var newNote = '<div class="' + noteDataLookup[column] + '"></div>';
		//put the note into the array
		// noteArray.push(new Note(column))
		noteArray.push(newNote);
	};
	//return an array of notes
	// return noteArray;
};



// var sheetMusic = columnGenerator(120,180);
// var noteHolster = [];

// // Array of svg circles is generated based on random number array
// for (i=0; i < sheetMusic.length; i++){
//  noteHolster.push(paper.circle(noteDataLookup[sheetMusic[i].column].xPosition,60,60).attr({fill: noteDataLookup[sheetMusic[i].column].noteColor, opacity: 0}));
// }


var ballPosition = 30;
// Listen for the server and route the data to onscreen visuals

// socket.onmessage = function(e) {

// 	// 1 moves the ball left
// 	if (e.data == 1){
// 		ballPosition--;
// 	}
// 	// 2 moves the ball right
// 	if (e.data == 2){
// 		ballPosition++;
// 	}
// 	// 3 taps the ball
// 	if (e.data == 3){

// 	};


// 	if (ballPosition >= 50){
// 	$('.ball').css({'left': '500px'});
// 	}
// 	if (ballPosition <= 10){
// 		$('.ball').css({'left': '100px'});
// 	}
// 	else $('.ball').css({'left': ballPosition*10});
// };

// var kickoff = function(){

// Start a countdown
var countdown = function(){
    for(i=0; i<9; i++){
        $('body').append('<div class="overlay"><h1 class="countdown">'+i+'</h1><div>');
    };
};

var i = 0;

// When the count down ends:
var wookBand = function(){
	// For every beat,

	// for (i=0; i < noteArray.length; i++){
	setTimeout(function(){
        console.log('Chitty bang bang: ' + noteArray.length);
        if (i < noteArray.length) {
            console.log('hay');
            //fade in a note and have it slide toward the goal line
            $(noteArray[i]).appendTo('#tray-left').velocity({translateY: '200px', opacity:1}, {duration: 500}).velocity({translateY: '400px'}, {duration: 1000}).velocity({translateY: '200px', opacity:0}, {duration: 500});
        }
        i++;
		window.requestAnimationFrame(wookBand);
		// When it hits the goal line, let the server know it's in the zone
		// If the server says it's good, pop the note and increment the player's score
	// Else, fade it out and
	}, (i * 2300));
};


// var wookBand = function(){
// 	// columnGenerator(138,239);
// 	$(noteArray[i]).appendTo('#tray-left').velocity({translateY: '200px', opacity:1}, {duration: 500}).velocity({translateY: '400px'}, {duration: 1000}).velocity({translateY: '200px', opacity:0}, {duration: 500});
// };

// setInterval(wookBand,100);


// 	for (i=0; i < noteHolster.length; i++){
// 		fadeIn(noteHolster[i]);
// 	}
// };


var initNotes = function () {
    console.log('about to drop some beats');
    var bpm = TRACKS[Songs.tracks[currentSong]].BPM;
    var length = TRACKS[Songs.tracks[currentSong]].songLength;
    columnGenerator(bpm, length);
    wookBand();
}

// Note pops when it is tapped by the user
// Note fades out when it passes beyond the target zone
