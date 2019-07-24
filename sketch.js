let running = true;
let orbits = [];
var savedOrbits = [];
let winWidth = $(window).width() * 0.69;
let winHeight = $(window).height();
let maxDim = Math.min(winWidth, winHeight);


function setup() {
  createCanvas(winWidth, winHeight);
  translate(0, height);
  scale(1,-1);
  frameRate(30);
  randomSeed(random(99));
}

function draw() {
  background(50);
  if (orbits[0]) {
    for (orbit of orbits) {
      orbit.run();
    }
  }

}

function mousePressed() {
  if ($("#playRadio").is(":checked")) {
    for (orbit of orbits) {
      let xdif = Math.pow((mouseX - orbit.x), 2);
      let ydif = Math.pow((mouseY - orbit.y), 2);
      if (xdif + ydif <= Math.pow(Math.max(orbit.rad1, orbit.rad2), 2)) {
        if (abs(orbit.speed1/30 - p1) < 0.001 && abs(orbit.speed2/30 - p2) < 0.0001) {
          orbit.colour = "green";
        } else {
        orbit.colour = "red";
        }
      }
    }
  }
}

function keyPressed() {
  randomLock = (keyCode == 32) ? false : true;
  if ($("#playRadio").is(":checked") && keyCode == 13) {
    $("#P2text").text("Period 2 =" + p2);
  }
}


function reset() {
  background(50);
  orbits = [];
}

//Sort out the random generation of offsets
//Make play mode so that you flip between viewing the planets and viewing the answers
//Play mode working
//Guess mode working
//Look at input mode again
//iPhone mode
//Fun graphics
