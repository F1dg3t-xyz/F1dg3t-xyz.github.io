// Initialize WaveSurfer
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

// Function to play a random audio file
function playRandomAudio() {
    // Array of audio file names
    var audioFiles = [
        "Do They See Me - Suno AI.mp3",
        "The Old Swing (1920s Dubstep) - Suno AI.mp3",
        "audio3.mp3"
        // Add more audio file names as needed
    ];

    // Get a random index
    var randomIndex = Math.floor(Math.random() * audioFiles.length);

    // Construct the path to the random audio file
    var audioPath = "/Z/music/" + audioFiles[randomIndex];

    // Load and play the audio file
    wavesurfer.load(audioPath);
}

// Play button event listener
document.getElementById('playPauseBtn').addEventListener('click', function() {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        document.getElementById('playPauseBtn').textContent = 'Play';
    } else {
        wavesurfer.play();
        document.getElementById('playPauseBtn').textContent = 'Pause';
    }
});

// Stop button event listener
document.getElementById('stopBtn').addEventListener('click', function() {
    wavesurfer.stop();
    document.getElementById('playPauseBtn').textContent = 'Play';
});

// Volume control event listener
document.getElementById('volumeControl').addEventListener('input', function() {
    var volume = this.value;
    wavesurfer.setVolume(volume);
});

// Call the function to play a random audio file when the page loads
window.onload = function() {
    playRandomAudio();
};
