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
    this.running = true;
    this.loop();
    this.createHunterAndBananaLoop();
    this.checkColisions();
  }

  loop() {
    this.runLogic();
    this.draw();

    if (this.running) {
      setTimeout(() => {
        this.loop();
      }, 500 / (this.speed * 2));
    }
  }

  createHunterAndBananaLoop() {
    this.hunters = this.hunters.filter(
      function(hunter){ 
        return hunter.x > 0;
      });
      
    this.bananas = this.bananas.filter(
      function(banana){ 
        return banana.x > 0;
      });
    
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

  checkColisions() {
    this.checkColisionsBananas();
    this.checkColisionsHunters();

    if (this.running) {
      setTimeout(() => {
        this.checkColisions();
      }, 500 / (this.speed * 2)); // or speed 1
    }
  }

  checkColisionsBananas() {
    if(this.bananas && this.bananas.length > 0) {
      
      const banana = this.bananas[this.bananas.length -1];
      const character = this.character;
  
      if ( (character.x + character.width) >= (banana.x) 
        && (character.x) <= (banana.x + banana.width) 
        && (character.y + character.height) >= (banana.y) 
        && (character.y) <= (banana.y + banana.height) ) {
          // eatingNoise.play();
          this.score += 1;
        }   
        // remove banana with sound and effect
    }
  }    

  checkColisionsHunters() {
    if(this.hunters && this.hunters.length > 0) {
      
      const hunter = this.hunters[this.hunters.length -1];
      const character = this.character;
  
      if ( (character.x + character.width) >= (hunter.x) 
        && (character.x) <= (hunter.x + hunter.width) 
        && (character.y + character.height) >= (hunter.y) 
        && (character.y) <= (hunter.y + hunter.height) ) {
          this.score -= 5;
          if (this.score = 0) {
            this.drawGameOver();
          }
          // eatingNoise.play();
          this.speed += 0.20;
        }
       // remove hunter with sound and effect
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
    const context = this.context;
    
    context.save();
    context.draw = "/images/game_over.JPG";
    context.restore();
    
    /*setTimeout(() => {
      this.drawGameOver();
    }, 5000);*/
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
/*
loose () {
  if (this.score = 0) {
  // Play sound of loosing
  // loosingNoise.play();
  this.reset();
  }
}
*/
