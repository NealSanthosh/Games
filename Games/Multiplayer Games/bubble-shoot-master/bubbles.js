//bubble variables
var bb;
var bbVel;
var bbSize;

function updateBubbles() {
    touch = false;
    for (var i = 0; i < bb.length; i++) {
        push();

        //bubble collisions 
        if (dist(bb[i].x, bb[i].y, p.x, p.y) < bbSize / 2) {
            touch = true;
            console.log(touch);
        }
        //update bb locations
        bb[i].add(bbVel[i]);

        //contain bb
        //contain player
        if (bb[i].x > width + bbSize / 2) {
            bb[i].x = 0
        }
        if (bb[i].x < -bbSize / 2) {
            bb[i].x = 400
        }
        if (bb[i].y > height + bbSize / 2) {
            bb[i].y = 0
        }
        if (bb[i].y < -bbSize / 2) {
            bb[i].y = 400
        }

        fill(132, 112, 255, 45)
        stroke(255);
        ellipse(bb[i].x, bb[i].y, bbSize);
        pop();
    }
    if (touch == true) {
        playerColor = color(255, 0, 0);
        Health--;
    } else {
        playerColor = color(255);
    }

}