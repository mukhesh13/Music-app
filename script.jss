// script.js
const audio = document.getElementById('audio');
const playlist = document.getElementById('playlist');

// Function to play a song
function playSong(e) {
    const songSrc = e.target.getAttribute('data-src');
    audio.src = songSrc;
    audio.play();
}

// Add click event listeners to each song in the playlist
const songs = playlist.querySelectorAll('a');
songs.forEach(song => {
    song.addEventListener('click', playSong);
});
