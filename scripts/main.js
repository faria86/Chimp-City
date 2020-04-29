// Initialize canvas
const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

var width = $canvas.width
var height = $canvas.height

const game = new Game($canvas)
game.start()

const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');

$buttonStart.addEventListener('click', () => {
  game.start();
  $buttonPause.innerText = 'Pause';
});

$buttonPause.addEventListener('click', () => {
  game.pause();
    if(game.running) {
        $buttonPause.innerText = 'Pause';
    } else {
        $buttonPause.innerText = 'Continue';
    }
});