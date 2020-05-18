function preload() {
    laserSound = loadSound('laser.ogg');
    deathSound = loadSound('death.ogg');
}



function setup() {
    createCanvas(400, 400);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(253,25,36);
    Score = 0;
    Health = 20;
    life = 2;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(0);

    updatePlayer();
    // updateBubbles();
    updateLasers();

    
  if (Health <= 0 && life <= 0) {
    background(255, 0, 0);
    print("END GAME");
    print(Score);
    noLoop();
  }else if(Health <= 0 && life >= 1){
    life = life -1;
    Health = 20;
    Score = Score - 10;
    p.y = 200;
    p.x = 200;
  }

  

}