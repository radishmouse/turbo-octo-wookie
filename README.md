# turbo-octo-wookie

Gaming platform

## Components

### Controllers

Two handmade Wookiee plushtoys containing 3 sensors: gyroscoppe, accelerometer, and magnetoscope.

Each set of sensors is wired to the GPIO of an individual Raspberry Pi.  
Python code streams realtime sensor data to server via WebSockets.

### Server
Clojure server takes 1500 ms timeslices of data and reduces to a gesture.  
Gestures are streamed via WebSockets to "game board."


### Board

Game Board consists of a web UI created and animated in SVG.  
Animations signal each player to perform specific dance moves, as MIDI audio is played.
Game Board receives gesture information for each of the players and provides visual feedback whether correct dance move was executed.


# Credits:

* Zack Simon: Plushtoy fabrication, SVG graphics, JavaScript animation, presentation graphics
* Jeff Heaton: JavaScript animation and game engine programming
* Kelly Senna: Hardware construction and programming
* Chris Aquino: Server code
