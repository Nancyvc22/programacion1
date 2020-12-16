var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var xPos = 203;
var yPos = 201;
var staro = 253;
var start = 95;

draw = function() {
  
  background(29, 40, 115);
  fill(255, 242, 0);
  ellipse(xPos, yPos, 10, 10);

  fill(168, 145, 242);
  rect(24,249,95,151);
  rect(300,262,86,151);
  rect(163,305,79,151);

  fill(145, 163, 237);
  ellipse(223,23,23,24);

  fill(224, 224, 33);
  ellipse(staro,start,23,24);
  ellipse(113,96,23,24);
  ellipse(36,119,23,24);
  ellipse(301,166,23,24);
  xPos= xPos+1;
  yPos=yPos-2;
  staro=staro++;
};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
