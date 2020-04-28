// class: runLogic() method; draw() method;

class Background {
  constructor(game) {
    this.game = game;
    this.img = new Image();
    this.img.src = "/images/game_background.PNG";
    this.x = 0;
    this.y = 0;
    this.speed = 5;
  }
  
  runLogic() {
    this.x--;
  }

  draw() {
    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;
    console.log(width);
    console.log(height);
    console.log(this.x);
    console.log(this.y);
    //context.drawImage(this.img, this.x, this.y, width, height);
    context.drawImage(this.img, this.x, 0);
    context.drawImage(this.img, this.x + this.game.$canvas.width, 0);
    context.drawImage(this.img, this.x + this.game.$canvas.width * 2, 0);

  }
}
