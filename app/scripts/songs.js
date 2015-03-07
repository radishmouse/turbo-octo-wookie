
var Songs = (function () {
    'use strict';

    var context;
    var bufferLoader;
    var soundBufferList;

    window.addEventListener('load', init, false);

    var TRACKS = {
        'barracuda': {
            songName: 'Barracuda',
            BPM: 138,
            songLength: 259,
            url: 'songs/1.m4a',
            level: 5
        },
        'teen_spirit': {
            songName: 'Smells Like Teen Spirit',
            BPM: 120,
            songLength: 262,
            url: 'songs/2.m4a',
            level: 5
        },
        'sweet_child': {
            songName: 'Sweet Child Of Mine',
            BPM: 128,
            songLength: 348,
            url: 'songs/3.m4a',
            level: 5
        }
    };


    var nowPlaying = {};

    function init() {
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            context = new AudioContext();
        }
        catch(e) {
            alert('no sound for you');
        }

        bufferLoader = new BufferLoader(
            context,
            Object.keys(TRACKS).map(function (key) { return TRACKS[key].url; }),
            finishedLoading
        );
        bufferLoader.load();
    }

    function finishedLoading(bufferList) {
        soundBufferList = bufferList;
        console.log('songs are ready');
    }


    function trackNumberByName(name) {
        var index = -1;
        Object.keys(TRACKS).forEach(function (key, i) {
            if (key === name) {
                index = i;
            }
        });

        return index;

    }

    function playTrack(name) {
        var trackNumber = trackNumberByName(name);
        if (trackNumber === -1) {
            throw Error('no track by that name');
        }
        var sound = playSound(
            soundBufferList[trackNumber],
            TRACKS[name].level
        );
        nowPlaying[name] = sound;
        return sound;
    }

    function stopTrack(name) {
        nowPlaying[name].stop();
        delete nowPlaying[name];
    }

    function playSound(buffer, gain) {
        /*
         * on iOS, Apple currently mutes all sound output until the first time a sound is played during a user interaction event - for example, calling playSound()
         */
        var source = context.createBufferSource();
        source.buffer = buffer;
        // if (gain) {
            // source.gain.value = gain;
        // }
        source.connect(context.destination);
        source.start(0);
        return source;
    }

    return {
        playTrack: playTrack,
        stopTrack: stopTrack,
        tracks: Object.keys(TRACKS)
    };
}());
