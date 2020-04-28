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
    this.character = new Character(this, 100, this.$canvas.height - 50);
    this.hunters = [];
    this.bananas = [];
    this.hunters.push(
      new Hunter(this, this.$canvas.width + 10, this.$canvas.height - 60)
    );
    this.bananas.push(
      new Banana(this, this.$canvas.width + 10, this.$canvas.height - 140)
    );
    this.background = new Background(this);

    //this.score = 30;

    this.speed = 5;
  }

  start() {
    this.running = true;
    this.loop();
    this.createHunterAndBananaLoop();
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
      }, 500 / (this.speed * 2)); // or speed 1
    }
  }

  createHunterAndBananaLoop() {
    if (Math.random() > 0.7) {
      this.bananas.push(
        new Banana(this, this.$canvas.width + 10, this.$canvas.height - 60)
      );
    } else {
      this.hunters.push(
        new Hunter(this, this.$canvas.width + 10, this.$canvas.height - 150)
      );
    }

    setTimeout(() => {
      this.createHunterAndBananaLoop();
    }, 3000);
  }

  runLogic() {
    for (let hunter of this.hunters) {
      hunter.runLogic();
    }
    for (let banana of this.bananas) {
      banana.runLogic();
    }
    this.background.runLogic();
    this.character.runLogic();
  }

  drawGameOver() {
    const context = this.context;

    context.save();

    context.draw = "/images/game_over.JPG";

    context.restore();
  }

  drawScoreboard() {
    const score = 25;

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
    //this.scoreBoard.draw();
    for (let hunter of this.hunters) {
      hunter.draw();
    }
    for (let banana of this.bananas) {
      banana.draw();
    }
  }
}
