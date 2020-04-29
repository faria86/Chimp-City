class Hunter {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 10;
  }
  
  runLogic() {
    this.x -= this.speed;
  }
  
  draw() {
    let characterX = this.x;
    let characterY = this.y;
    const context = this.game.context;
    const hunterImage = new Image();
    hunterImage.src = "/images/enemy-police.png";
    context.drawImage(hunterImage, characterX, characterY, this.width, this.height);
  }
}

class Banana {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 8;
  }
  
  runLogic() {
    this.x -= this.speed;
  }
  
  draw() {
    const context = this.game.context;
    let characterX = this.x;
    let characterY = this.y;
    
    const bananaImage = new Image();
    bananaImage.src = "/images/banana.png";
    context.drawImage(bananaImage, characterX, characterY, this.width, this.height);
  }
}