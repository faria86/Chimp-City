// const loosingNoise = new Audio('');

class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext("2d");

    this.scoreboard = new Scoreboard(this);
    
    this.reset();
  }

  reset() {
    // adjust width and height
    this.character = new Character(this, 100, this.$canvas.height - 50, 40, 50);

    this.hunters = [];
    this.bananas = [];

    // adjust width and height
    this.hunters.push(
      new Hunter(this, this.$canvas.width + 10, this.$canvas.height - 60, 40, 50)
    );

    // adjust width and height
    this.bananas.push(
      new Banana(this, this.$canvas.width + 10, this.$canvas.height - 60, 40, 50)
    );

    this.background = new Background(this);

    this.score = 25;

    this.speed = 5;
  }

  start() {
    this.reset();
    this.running = true;
    this.gameOver = false;
    this.loop();
    this.createHunterAndBananaLoop();
    this.checkColisions();
  }

  pause(){
    if(this.gameOver){
      return;
    }

    if(this.running){
      this.running = false;
    } else {
      this.running = true;
      this.loop();
      this.createHunterAndBananaLoop();
      this.checkColisions();
    }    
  }

  loop() {
    if(!this.gameOver) {
      this.runLogic();
      this.draw();

      if (this.running) {
        setTimeout(() => {
          this.loop();
        }, 500 / (this.speed * 2));
      }
    }    
  }

  createHunterAndBananaLoop() { 
    if (!this.gameOver) {
      if (Math.random() > 0.7) {
        this.bananas.push(
          new Banana(this, this.$canvas.width + 10, this.$canvas.height - 70, 50, 50) && 
          new Banana(this, this.$canvas.width + 10, this.$canvas.height - 140, 50, 50)
        );
      } 
      else {
        this.hunters.push(
          new Hunter(this, this.$canvas.width + 10, this.$canvas.height - 70, 50, 50)
        );
      }

      setTimeout(() => {
        this.createHunterAndBananaLoop();
      }, 2500);
    }
  }

  checkColisions() {
    if (!this.gameOver) {
      this.checkColisionsBananas();
      this.checkColisionsHunters();

      if (this.running) {
        setTimeout(() => {
          this.checkColisions();
        }, 500 / (this.speed * 2)); // or speed 1
      }
    }
  }

  checkColisionsBananas() {
    if(this.bananas && this.bananas.length > 0) {

      const character = this.character;

      for(var i = 0; i < this.bananas.length; i++) {
        
        const banana = this.bananas[i];

        if ( (character.x + character.width) >= (banana.x)
          && (character.x) <= (banana.x + banana.width)
          && (character.y + character.height) >= (banana.y)
          && (character.y) <= (banana.y + banana.height) ) {
          
            this.bananas.splice(i,1);
            // eatingNoise.play();
            this.score += 1;
        }
      }
    }
  }      

  checkColisionsHunters() {
    if(this.hunters && this.hunters.length > 0) {
      
      const character = this.character;
  
      for(var i = 0; i < this.hunters.length; i++) {

        const hunter = this.hunters[i];

        if ( (character.x + character.width) >= (hunter.x) 
        && (character.x) <= (hunter.x + hunter.width) 
        && (character.y + character.height) >= (hunter.y) 
        && (character.y) <= (hunter.y + hunter.height) ) {          
          if (this.score - 5 <= 0) {
            this.score = 0;
            this.drawGameOver();
          } else {
            this.score -= 5;
            this.hunters.splice(i,1);
            this.speed += 0.20;
          }          
        }
      }
    } 
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
    this.gameOver = true;
    this.clearEverything();    
    this.drawGameOverImage();    
  }

  drawGameOverImage(){
    const context = this.context;
    var gameOverImg = new Image();
    gameOverImg.src = "/images/game_over.JPG";
    context.drawImage(gameOverImg, 0, 0, this.$canvas.width, this.$canvas.height);
    if (this.gameOver) {
      setTimeout(() => {
        this.drawGameOverImage();
      }, 500 / (this.speed * 2));
    }
  }
  
  
  clearEverything() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }
  
  draw() {
    this.clearEverything();
    
    this.background.draw();
    this.character.draw();
    this.scoreboard.draw();
    
    for (let hunter of this.hunters) {
      hunter.draw();
    }
    for (let banana of this.bananas) {
      banana.draw();
    }
    
  }
}


