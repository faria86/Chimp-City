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
    let characterX = this.x;
    let characterY = this.y;
    const context = this.game.context;
    const hunterImage = new Image();
    hunterImage.src = "/images/enemy-police.png";
    context.drawImage(hunterImage, characterX, characterY, 50, 50);
  }
}

class Banana {
  constructor(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speed = 8;
  }
  
  runLogic() {
    this.x -= this.speed;
  }
  
  checkCollisionWithBanana() {
    /*
    const banana = this.game.banana;
    const character = this.game.character
    
    if ( (character.x + character.width) >= (banana.x) &&
    (character.x) <= (banana.x + banana.width) && 
    (character.y + character.height) >= (banana.y) && 
    (character.y) <= (banana.y + banana.height) ) {
      //this.game.score -=5;
      this.game.speed += 0.5;
    }
    */
  }
  
  draw() {
    const context = this.game.context;
    let characterX = this.x;
    let characterY = this.y;
    
    const bananaImage = new Image();
    bananaImage.src = "/images/banana.png";
    context.drawImage(bananaImage, characterX, characterY, 50, 50);
  }
}
