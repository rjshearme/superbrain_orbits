class Orbit {
  constructor(x, y, r1, s1, r2, s2, gridnum, drawlines,  predrawn, runSpeed) {
    this.x = x; this.y = y;
    this.scale = 1/Math.max(r1,r2) * width/gridnum;
    this.rad1 = r1 * this.scale;
    this.rad2 = r2 * this.scale;
    this.speed1 = s1 * 30;
    this.speed2 = s2 * 30;
    this.angle1 = 0;
    this.angle2 = 0;
    this.lines = [];
    this.drawlines = drawlines;
    this.r1x, this.r1y, this.r2x, this.r2y;
    this.predrawn = predrawn;
    this.loopsDone = 0;
    this.runSpeed = runSpeed;
    this.colour = "white";
  }

  run() {
    if (this.predrawn) {
      this.predraw(this.runSpeed);
    } else {
      this.update(this.runSpeed);
    }
    this.draw();
  }

  predraw(num) {
    while (this.loopsDone < num) {
      //Planet 1
      this.angle1 -= TWO_PI/this.speed1;
      this.r1x = this.rad1 * cos(this.angle1) + this.x;
      this.r1y = this.rad1 * sin(this.angle1) + this.y;

      //Planet 2
      this.angle2 -= TWO_PI/this.speed2;
      this.r2x = this.rad2 * cos(this.angle2) + this.x;
      this.r2y = this.rad2 * sin(this.angle2) + this.y;

      //Lines between planets
      this.lines.push({
        start: createVector(this.r1x, this.r1y),
        end: createVector(this.r2x, this.r2y)
      })
      this.loopsDone++;
    }
  }

  update(num) {
    if (running) {
      for (let i=0; i<num; i++) {
        //Planet 1
        this.angle1 -= TWO_PI/this.speed1;
        this.r1x = this.rad1 * cos(this.angle1) + this.x;
        this.r1y = this.rad1 * sin(this.angle1) + this.y;

        //Planet 2
        this.angle2 -= TWO_PI/this.speed2;
        this.r2x = this.rad2 * cos(this.angle2) + this.x;
        this.r2y = this.rad2 * sin(this.angle2) + this.y;

        //Lines between planets
        this.lines.push({
          start: createVector(this.r1x, this.r1y),
          end: createVector(this.r2x, this.r2y)
        })
      }
    }
  }

  draw() {
    push();
    //Draw the inter-planetary lines
    stroke(this.colour);
    strokeWeight(0.1);
    if (this.drawlines) {
      for (let l of this.lines) {
        line(l.start.x, l.start.y, l.end.x, l.end.y);
      }
    }

    //Draw the sun
    stroke("yellow");
    strokeWeight(20);
    point(this.x,this.y);


    //Draw each planet
    stroke("red")
    strokeWeight(5);
    point(this.r1x, this.r1y);
    point(this.r2x, this.r2y);
    pop();
  }

  reset() {
    this.lines = [];
    this.angle1 = 0;
    this.angle2 = 0;

  }
}
