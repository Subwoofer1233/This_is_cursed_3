//get our elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//creat functions

function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log("dukie dukie 1233");
    toggle.textContent = icon;
}
function skip() {
    console.log("skipping for the dukie")
    video.currentTime += parseFloat(this.dataset.skip)
}
function handleRangeUpdate() {
    console.log(this.value)
    video[this.name] = this.value
}
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    console.log("dukie 8 dukies is better then one dukie, dukie dukie dukie")
}
function scrub(e) {
    console.log(e)
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}


//event listeners

video.addEventListener("play", updateButton)
video.addEventListener("pause", updateButton)
video.addEventListener("click", togglePlay)
video.addEventListener("timeupdate", handleProgress)
toggle.addEventListener("click", togglePlay)
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate))
let mousedown = false;
progress.addEventListener("click", scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true)
progress.addEventListener("mouseup", () => mousedown = false)
// progress.addEventListener("mousemove", () => {
//     if (mousedown === true) {
//         scrub()
//     }
// })