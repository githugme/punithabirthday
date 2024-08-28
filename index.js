alert("WAIT!\nIf the song is not playing on the background,\ncheck the top left corner and hit the play button. \nBest to view it on laptop/desktop");
// alert("Enjoy every bit of it.");
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 1;
  audio.play();
});
