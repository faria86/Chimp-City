// newCharacter(this); newEnemy(this); newBackground(this)

// const loosingNoise = new Audio('');
class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext("2d");

    //this.scoreBoard = new Scoreboard(this);

    this.reset();
  }

  reset() {
    this.character = new Character(this, 10, this.$canvas.height - 60);
    this.hunter = new Hunter(
      this,
      this.$canvas.width + 10,
      this.$canvas.height - 150
    );
    this.banana = new Banana(
      this,
      this.$canvas.width + 10,
      this.$canvas.height - 60
    );
    this.background = new Background(this);

    this.score = 30;

    this.speed = 1;
  }

  start() {
    this.running = true;
    this.loop();
  }

  //  loose () {
  //    // Play sound of loosing
  //    loosingNoise.play();
  //    this.reset();
  //  }

  loop() {
    this.runLogic();
    this.draw();

    if (this.running) {
      setTimeout(() => {
        this.loop();
      }, 500 / (this.speed * 0.5)); // or speed 1
    }
  }

  runLogic() {
    this.hunter.runLogic();
    this.banana.runLogic();
    this.background.runLogic();
  }

  drawGameOver() {
    const context = this.context;

    context.save();

    context.draw = "/images/game_over.JPG";

    context.restore();
  }

  drawScoreboard() {
    const socre = 25;

    context.font = "24px sans-serif";

    context.fillText(`${score} Points`, 25, this.game.$canvas.height - 25);
  }

  clearEverything() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  draw() {
    this.clearEverything();

    this.background.draw();
    this.character.draw();
    this.hunter.draw();
    this.banana.draw();
    //this.scoreBoard.draw();
  }
}
