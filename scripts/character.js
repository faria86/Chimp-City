// class: runLogic() method; draw() method; detectCollision()
class Character {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 50;

    this.gravity = 0.09;

    this.characterImage = new Image();
    this.characterImage.src = "/images/character.PNG";

    this.setBindingKeys();
  }

  setBindingKeys() {
    window.addEventListener("keydown", (event) => {
      event.keyCode === 38 ? this.jump() : null;
    });
  }
   //move logic to game.js

  jump() {
    if (this.speedY >= 0) {
      this.speedY = -4;
    }
  }

  runLogic() {
    const newY = this.y + this.speedY;

    if (newY < this.game.$canvas.height - 50) {
      this.speedY = this.speedY + this.gravity;
      this.y = newY;
    } else {
      this.speedY = 0;
    }
  }

  draw() {
    const context = this.game.context;

    let characterX = this.x;
    let characterY = this.y;

    context.drawImage(this.characterImage, characterX, characterY, this.width, this.height);
  }
}