const album = [
    {
        song: "Dreams and Disasters",
        length: 225,
        playing: true
    },
    {
        song: "Shooting Star",
        length: 247,
        playing: false
    },
    {
        song: "Gold",
        length: 236,
        playing: false
    },
    {
        song: "Dementia",
        length: 211,
        playing: false
    },
    {
        song: "I'm Coming After You",
        length: 210,
        playing: false
    },
    {
        song: "Speed of Love",
        length: 207,
        playing: false
    },
    {
        song: "Good Time",
        length: 206,
        playing: false
    }
];

const songList = document.querySelector(".card--bottomSection-songList");
var songPlaying = document.querySelector(".song");
var songPlayingTotalTime = document.querySelector(".total--time");
var songPlayingCurrentTime = document.querySelector(".time--elapsed");
var currentSongSeconds = 1;

var myProgressBar = document.querySelector(".song--progress-bar");
var myProgressDot = document.querySelector(".song--progress-point");
var pauseButton = document.querySelector(".pause");
var playButton = document.querySelector(".play");

renderSongList();
renderNowPlaying();
playSong();

pauseButton.addEventListener("click", pauseSong);
playButton.addEventListener("click", playSong);


function renderSongList() {
    album.forEach((song) => {
        if (!song.playing) {
            var div = document.createElement("div");
            div.classList.add("songList--element");

            songMinutes = Math.trunc(song.length / 60);
            songSeconds = (song.length % 60);

            if (songSeconds < 10) {
                songSeconds = songSeconds.toString().padStart(2, "0");
            }

            div.innerHTML = `
                <p class="song--title">${song.song}</p>
                <p class="song--length">${songMinutes}:${songSeconds}</p>
                `

            songList.appendChild(div);
        }
    })
}

function renderNowPlaying() {
    album.forEach((song) => {
        if (song.playing) {

            currentSongSeconds = song.length;
            songMinutes = Math.trunc(song.length / 60);
            songSeconds = (song.length % 60);

            if (songSeconds < 10) {
                songSeconds = songSeconds.toString().padStart(2, "0");
            }

            songPlaying.innerHTML = song.song;
            songPlayingTotalTime.innerHTML = songMinutes + ":" + songSeconds;
            songPlayingCurrentTime.innerHTML = "0:00"
        }
    })
}

var interval;
var percentage = 1
var width = (percentage / currentSongSeconds) * 100;
var songPlayingCurrentTotal = 1
var songPlayingCurrentMins = 0;
var songPlayingCurrentSecs = "00"

function playSong() {
    clearInterval(interval);
    interval = setInterval(progressing, 1000);
    playButton.style.display = "none";
    pauseButton.style.display = "block";
    
    function progressing() {
        if (width >= 100) {
            percentage = 1;
            width = (percentage / currentSongSeconds) * 100;
            songPlayingCurrentMins = 0;
            songPlayingCurrentSecs = "00"
            clearInterval(interval);
        }
        else {
            percentage++;
            songPlayingCurrentTotal = percentage;
            songPlayingCurrentMins = Math.trunc(songPlayingCurrentTotal/ 60);
            songPlayingCurrentSecs = (songPlayingCurrentTotal % 60);

            if (songPlayingCurrentSecs < 10) {
                songPlayingCurrentSecs = songPlayingCurrentSecs.toString().padStart(2, "0");
            }

            width = (percentage / currentSongSeconds) * 100;
            myProgressBar.style.background =
                "linear-gradient(to right, var(--main-accent), var(--main-accent) " + width + "%, black " + width + "%)";
            myProgressDot.style.left = width + "%";
            songPlayingCurrentTime.innerHTML = songPlayingCurrentMins + ":" + songPlayingCurrentSecs;

        }
    }
}

function pauseSong() {
    clearInterval(interval);
    pauseButton.style.display = "none";
    playButton.style.display = "block"
}

