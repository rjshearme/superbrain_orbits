var r1 = 15;
var r2 = 30;
var p1 = 3.85;
var p2 = 7.9;
var numLoops = 100;
var randomLock = false;


$(document).ready(function() {

  $("#R1").on('input', function() {
    r1 = parseFloat($(this).val());
    $("#R1text").text("Radius 1 = " + r1);
    updateOrbits();
  })

  $("#R2").on('input', function() {
    r2 = parseFloat($(this).val());
    $("#R2text").text("Radius 1 = " + r2);
    updateOrbits();
  })

  $("#P1").on('input', function() {
    p1 = parseFloat($(this).val());
    $("#P1text").text("Period 1 = " + p1);
    updateOrbits();
  })

  $("#P2").on('input', function() {
    if (!randomLock) {
      p2 = parseFloat($(this).val());
      $("#P2text").text("Period 2 = " + p2);
      updateOrbits();
    }
  })

  $("#num-loops").on('input', function() {
    numLoops = parseFloat($(this).val());
    $("#numLoopsText").text("Num loops = " + numLoops);
    updateOrbits();
  })

  $("#draw-speed").on('input', function() {
    numLoops = parseFloat($(this).val());
    $("#drawSpeedText").text("Drawing speed =" + numLoops);
    updateOrbits();
  })

  ///-------------------------------------------------------///

  $("#inputRadio").change(function() {
    $(".control").addClass("hidden");
    $(".input").removeClass("hidden");
    numLoops=1;
    $("#draw-speed").val(1);
    updateOrbits();
  })

  $("#drawRadio").change(function() {
    $(".control").addClass("hidden");
    $(".drawing").removeClass("hidden");
    updateOrbits();
  })

  // $("#guessRadio").change(function() {
  //   $(".control").addClass("hidden");
  //   $(".guess").removeClass("hidden");
  //   updateOrbits();
  //
  // })

  $("#playRadio").change(function() {
    $(".control").addClass("hidden");
    $(".play").removeClass("hidden");
    updateOrbits();
  })

  $("#planetsRadio").change(function() {
    $(".control").addClass("hidden");
    $(".planets").removeClass("hidden");
    updateOrbits();
  })

  $("#random").click(function() {
    r1 = random(1,30);

  })


  ///-------------------------------------------------------///

  $("#gameSwitch").click(function() {
    // $(this).text(($(this).text() == "View orbits") ? "View planets" : "View orbits");
    if ($(this).text() == "View orbits") {
      $(this).text("View planets");


    } else {
      $(this).text("View orbits");
      for (orbit of orbits) {
        savedOrbits.push(orbit);
      }
      orbits = [new Orbit(width/2, height/2, r1/3, p1, r2, p2, 2, false, false, numLoops)];

    }


  })

});
//test push

function updateOrbits() {
  if ($("#inputRadio").is(":checked")) {
    orbits=[];
    orbits.push(new Orbit(width/2, height/2, r1, p1, r2, p2, 3, true, false, numLoops));

  } else if ($("#drawRadio").is(":checked")) {
    orbits = [];
    orbits.push(new Orbit(width/2, height/2, r1, p1, r2, p2, 3, true, true, numLoops));

  } else if ($("#planetsRadio").is(":checked")) {
    orbits = [];
    orbits.push(new Orbit(width/2, height/2, r1, p1, r2, p2, 3, false, false, 1));

  } else if ($("#guessRadio").is(":checked")) {

  } else if ($("#playRadio").is(":checked")) {
    if (!randomLock) {
      r1 = 15;
      r2 = 30;
      p1 = 1;
      p2 = random(1,15);
      randomLock = true;
    }
    $("#P2text").text("Period 2 = --")

    positions = [];
    positions.push(createVector(Math.floor(width/6), Math.floor(height/4)));
    positions.push(createVector(Math.floor(width/6), Math.floor(height*3/4)));
    positions.push(createVector(Math.floor(width/2), Math.floor(height/4)));
    positions.push(createVector(Math.floor(width/2), Math.floor(height*3/4)));
    positions.push(createVector(Math.floor(width*5/6),Math.floor(height/4)));
    positions.push(createVector(Math.floor(width*5/6),Math.floor(height*3/4)));
    shuffle(positions, true);

    orbits[0] = new Orbit(positions[0].x, positions[0].y, r1/3, p1, r2/3, p2, 6, true, true, numLoops);
    orbits[1] = new Orbit(positions[1].x, positions[1].y, r1/3, p1 + randomGaussian(0,0.3), r2/3, p2 + randomGaussian(0,0.3), 6, true, true, numLoops);
    orbits[2] = new Orbit(positions[2].x, positions[2].y, r1/3, p1 + randomGaussian(0,0.3), r2/3, p2 + randomGaussian(0,0.3), 6, true, true, numLoops);
    orbits[3] = new Orbit(positions[3].x, positions[3].y, r1/3, p1 + randomGaussian(0,0.3), r2/3, p2 + randomGaussian(0,0.3), 6, true, true, numLoops);
    orbits[4] = new Orbit(positions[4].x, positions[4].y, r1/3, p1 + randomGaussian(0,0.3), r2/3, p2 + randomGaussian(0,0.3), 6, true, true, numLoops);
    orbits[5] = new Orbit(positions[5].x, positions[5].y, r1/3, p1 + randomGaussian(0,0.3), r2/3, p2 + randomGaussian(0,0.3), 6, true, true, numLoops);
  }
}
