var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);
//pizza
fill(237, 220, 133);
triangle(200,70,80,250,320,250);
//orilla
line(81,249,322,249);
//peperoni
fill(255,111,0);
ellipse(192,129,42,42);
ellipse(247,207,42,42);
ellipse(157,204,42,42);
//piña
fill(255, 242, 0);
rect(211,171,10,13,8);
rect(226,140,10,13,8);
rect(162,146,10,13,8);
rect(200,209,10,13,8);


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
