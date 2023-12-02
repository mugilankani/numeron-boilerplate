// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const playButton = document.querySelector('.play')
playButton.addEventListener('click', ()=>{
  location.href="game.html"
})