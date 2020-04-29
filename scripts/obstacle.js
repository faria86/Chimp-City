class Hunter {
  constructor(game, x, y, width, height) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 8;
    this.hunterImage = new Image();
    this.hunterImage.src = "/images/enemy-police.png";
  }
  
  runLogic() {
    this.x -= this.speed;
  }
  
  draw() {
    const context = this.game.context;
    let characterX = this.x;
    let characterY = this.y;
    context.drawImage(this.hunterImage, characterX, characterY, this.width, this.height);
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
    this.bananaImage = new Image();
    this.bananaImage.src = "/images/banana.png";
  }
  
  runLogic() {
    this.x -= this.speed;
  }
  
  draw() {
    const context = this.game.context;
    let characterX = this.x;
    let characterY = this.y;
    
    context.drawImage(this.bananaImage, characterX, characterY, this.width, this.height);
  }
}