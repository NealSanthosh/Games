
var snake;
var rez = 20;
var food;
var w;
var h;
var x;
var y;
var number;

var score = 0;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  x = floor(random(w));
  y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
  background("blue");
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  if (snake.endGame()) {
    number = random(1,4);
  }

  
  for(let i = 0; i < snake.body.length-1; i++) {
    let part = snake.body[i];
    if(part.x == x + 1 && part.y == y + 1 || part.x == x - 1 && part.y == y - 1) {
      number = random(1,4);
    }
  }
  
  if (food.x < snake.body[snake.body.length-1].x || number === 1) {
    snake.setDir(-1, 0);
  } else if (food.x > snake.body[snake.body.length-1].x || number === 2){
    snake.setDir(1, 0);
  } else if (food.y > snake.body[snake.body.length-1].y || number === 3) {
    snake.setDir(0, 1);
  } else if (food.y < snake.body[snake.body.length-1].y || number === 4) {
    snake.setDir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

  // if (snake.endGame()) {
  //   background(255, 0, 0);
  //   print("END GAME");
  print(score);
  //   noLoop();
  // }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}