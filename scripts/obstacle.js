// class: runLogic() method; draw() method; detectCollision()

class Hunter {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = 10;
  }

  runLogic() {
    this.x -= this.speed;
  }

  checkCollisionWithHunter() {
    //redo this check collision functions
  }

  draw() {
    const hunterImage = new Image();

    hunterImage.src = "/images/enemy_hunter.JPG";

    let characterX = this.x;
    let characterY = this.y;
    const context = this.game.context;
    context.drawImage(hunterImage, characterX, characterY, 50, 50);
  }
}

class Banana {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = 10;
  }

  runLogic() {
    this.x -= this.speed;
  }

  checkCollisionWithBanana() {
    //redo tomorrow
  }

  draw() {
    const bananaImage = new Image();
    const context = this.game.context;

    bananaImage.src = "/images/banana.JPG";

    let characterX = this.x;
    let characterY = this.y;

    context.drawImage(bananaImage, characterX, characterY, 50, 50);
  }
}
