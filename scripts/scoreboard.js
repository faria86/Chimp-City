class Scoreboard {
  constructor (game) {
    this.game = game;
  }

  draw() {
    const context = this.game.context;
    const score = this.game.score;

    //console.log(score);

    context.font = '25px sans-serif';

    context.fillText(`${score} Points`, 25, this.game.$canvas.width - 650, this.game.$canvas.height - 50);
  }
}