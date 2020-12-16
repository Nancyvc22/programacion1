var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
var a = 200;
var b = 200;
var total = 100;

draw = function() {
    background(207, 254, 255);

    var x = 200;
var y = 200;
var total = 140;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);

    triangle(
        x-total/1.8, x-total/13.6, x-total/0.9, x+total/1.67,
        x-total/0.89, x-total/1.5);

    ellipse(x, y, total*10/7, total); // body?
    fill(0, 0, 0);
    ellipse(x+total/2, y-total/8, total/12, total/12); // face?
};

};


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
