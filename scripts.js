const audio = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const seekBar = document.getElementById('seek-bar');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = 'Pause';
        document.querySelector('.player').classList.add('floating');
    } else {
        audio.pause();
        playBtn.innerText = 'Play';
        document.querySelector('.player').classList.remove('floating');
    }
});

// Update seek bar as music plays
audio.addEventListener('timeupdate', () => {
    const value = (audio.currentTime / audio.duration) * 100;
    seekBar.value = value;
});