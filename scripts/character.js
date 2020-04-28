// class: runLogic() method; draw() method; detectCollision()
class Character {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;

    this.speedX = 0;
    this.speedY = 10;

    let jumping = true;
  }

  setBindingKeys() {
    window.addEventListener("keydown", (event) => {
      event.keyCode === 38 ? this.jump() : null;
    });
  }

  jump() {
    this.y -= this.speedY;
  }

  loop() {
    if (controller.up && character.jumping == false) {
      character.speedY -= 20;
      character.jumping = true;
    }

    character.speedY += 1.5; // gravity
    character.x += character.speedX;
    character.y += character.speedY;
    character.speedX *= 0.9; // friction
    character.speedY *= 0.9; // friction

    // if rectangle is falling below floor line
    if (character.y > 500 - 25 - 50) {
      character.jumping = false;
      character.y = 500 - 25 - 50;
      character.speedY = 0;
    }

    // if rectangle is going off the left of the screen
    //if (character.x < -50) {
    //  character.x = 500;

    //} else if (character.x > 500) {// if rectangle goes past right boundary
    //  rectangle.x = -50;
    //}
  }

  draw() {
    const characterImage = new Image();
    const context = this.game.context;

    characterImage.src = "/images/character.PNG";

    let characterX = this.x;
    let characterY = this.y;

    context.drawImage(characterImage, characterX, characterY, 50, 50);
  }
}
