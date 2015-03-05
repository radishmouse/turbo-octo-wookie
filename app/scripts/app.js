console.log ('Prepare to Ride! Pew pew!');

var paper = Snap('.tray'),
	circle = paper.circle(150,150,100),
	rect = paper.rect(150, 150, 150, 150);

rect.attr({
  stroke: 'red',
  "stroke-width": 2,
  fill: 'yellow'
});


// Wookie Effects
	// Bounce
		// Whole wookie shoots up
		// Whole wookie comes back down
	// Lean Left
		// Top of wookie rotates around center bottom to the left
		// Returns to center
	// Lean Right
		// Top of wookie rotates around center bottom to the right
		// Returns to center
	// Special Effect
		// Wookie top half slides up
		// Confetti animation

// Gameplay mechanics
	// Ball moves left when wookie moves left
	// Ball moves right when wookie moves right

// Menu
	// Menu item grows when ball moves toward it
	// Menu item shrinks when ball moves away from it

// Notes
	// Note fades in 
	// Note slides down to BPM of song
	// Register target to server
		// Register note passing into zone
		// Send to server
	// Note pops when it is tapped by the user
	// Note fades out when it passes beyond the target zone