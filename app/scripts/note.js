var paper = Snap('');

<<<<<<< HEAD
var noteDataLookup = [
    {/* this line intentionally left blank for 1 instead of 0 */},
    {
        xPosition: 100,
        noteColor: '#C0392B'
    },
    {
        xPosition: 300,
        noteColor: '#27AE60'
    },
    {
        xPosition: 500,
        noteColor: '#2980B9'
    }
=======
var noteDataLookup = [ 
	0,
	'noteLeft',
	'noteCenter',
	'noteRight'
>>>>>>> jh/svg-animations
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
<<<<<<< HEAD
    var noteArray = [];
    // var beats = (songDataLookup[songNumber].BPM/60)*songDataLookup[songNumber].songLength;

    // for (count = 0;count < beats; count++){
    //     // randomly choose which column to be in
    //     var column = Math.floor(Math.random()*3+1);

    //     // create new svg note
    //     var newNote = paper.circle(noteDataLookup[column].xPosition,60,60).attr({fill: noteDataLookup[column].noteColor, opacity: 0})
    //     //put the note into the array
    //     // noteArray.push(new Note(column))
    //     noteArray.push(newNote);
    // }
    //return an array of notes
    return noteArray;
=======
	var beats = (songDataLookup[songNumber].BPM/60)*songDataLookup[songNumber].songLength;

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
>>>>>>> jh/svg-animations
};



// var sheetMusic = columnGenerator(120,180);
// var noteHolster = [];

// // Array of svg circles is generated based on random number array
// for (i=0; i < sheetMusic.length; i++){
//  noteHolster.push(paper.circle(noteDataLookup[sheetMusic[i].column].xPosition,60,60).attr({fill: noteDataLookup[sheetMusic[i].column].noteColor, opacity: 0}));
// }


var ballPosition = 30;
// Listen for the server and route the data to onscreen visuals
<<<<<<< HEAD
// socket.onmessage = function(e) {
//
//     // 1 moves the ball left
//     if (e.data == 1){
//
//     };
//     // 2 moves the ball right
//     if (e.data == 2){
//
//     };
//     // 3 taps the ball
//     if (e.data == 3){
//
//     };
// };

// User should see ball feedback when they move the controller
// Load the ball
loadPart(wookieParts[9].url, function(){
    // Snap('#ball');
});
var ballPosition = 30,
    ballMin = 0,
    ballMax = 60;



=======
socket.onmessage = function(e) {

	// 1 moves the ball left
	if (e.data == 1){
		ballPosition--;
	}
	// 2 moves the ball right
	if (e.data == 2){
		ballPosition++;
	}
	// 3 taps the ball
	if (e.data == 3){

	};
>>>>>>> jh/svg-animations

	if (ballPosition >= 50){
	$('.ball').css({'left': '500px'});
	}
	if (ballPosition <= 10){
		$('.ball').css({'left': '100px'});
	}
	else $('.ball').css({'left': ballPosition*10});	
};

// var kickoff = function(){

// Start a countdown
var countdown = function(){
    for(i=0; i<9; i++){
        $('body').append('<div class="overlay"><h1 class="countdown">'+i+'</h1><div>');
    };
};

var i;

// When the count down ends:
<<<<<<< HEAD
    // For every beat, fade in a note and have it slide toward the goal line
    // When it hits the goal line, let the server know it's in the zone
    // If the server says it's good, pop the note and increment the player's score
// Else, fade it out and

        // var pop = function() {note.animate({opacity: 0, width: )}, //the note should expand and fade, then be deleted
        // fadeOut = function() {note.animate({opacity: 0}, 200)},
        // crossTarget = function() {note.animate({ transform: 'translate(0,200)'}, 200, mina.linear, },
        // slideDown = function() {note.animate({ transform: 'translate(0,400)'}, 200, mina.linear, crossTarget},
        fadeIn = function(note) {note.animate({opacity: 1}, 200, mina.linear, slideDown)};




    for (i=0; i < noteHolster.length; i++){
        fadeIn(noteHolster[i]);
    }
};
=======
// var wookBand = function(){
// 	// For every beat,
	
// 	// for (i=0; i < noteArray.length; i++){
// 	setTimeout(function(){
// 		// window.requestAnimationFrame(wookBand);
// 		console.log('Chitty bang bang');
// 		if (i < noteArray.length) {
// 		//fade in a note and have it slide toward the goal line
// 		$(noteArray[i]).appendTo('#tray-left').velocity({translateY: '200px', opacity:1}, {duration: 500}).velocity({translateY: '400px'}, {duration: 1000}).velocity({translateY: '200px', opacity:0}, {duration: 500});                                  
// 		}
// 		i++;
// 		// When it hits the goal line, let the server know it's in the zone
// 		// If the server says it's good, pop the note and increment the player's score
// 	// Else, fade it out and     
// 	}, 2300);
// };


var wookBand = function(){
	// columnGenerator(138,239);
	$(noteArray[i]).appendTo('#tray-left').velocity({translateY: '200px', opacity:1}, {duration: 500}).velocity({translateY: '400px'}, {duration: 1000}).velocity({translateY: '200px', opacity:0}, {duration: 500});                                  
};

setInterval(wookBand,100);
			

// 	for (i=0; i < noteHolster.length; i++){
// 		fadeIn(noteHolster[i]);
// 	}	
// };
>>>>>>> jh/svg-animations


// Note pops when it is tapped by the user
// Note fades out when it passes beyond the target zone
