var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(500,400);
background (92, 195, 242);
var a = 250;
var b = 250;
var total = 175;
fill(3, 3, 3);
textSize(30);
text("¡Pez inflable!", 160, 37);
textSize(16);
text("¡Este es un gran producto, te ayudará mantener entretenido a tu hijo!", 5, 87);
 draw= function() {
       triangle(
       a-total/1.8,
       a-total/13.6,
       a-total/0.9,
       a+total/1.67,
       a-total/0.89,
       a-total/1.5);
    fill (255, 222, 8);
    ellipse(a, b, total*10/7, total);
    fill(43, 71, 17);
    ellipse(a+total/2, b-total/8, total/12, total/12);
 };


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
