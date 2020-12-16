var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
background(219, 255, 255);
fill(240, 67, 24);
triangle(200, 28, 350, 150, 50, 150);

fill(219, 147, 21);
quad(158,63,105,104,114,9,139,13);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(235, 56, 56);
stroke(252, 252, 252);
for (var i =10; i <55 ; i++){
    for(var j=30; j<68;j++){
    rect(i*6,j*5,16,23);
    }
}

fill(120, 80, 19);
rect(180, 280, 40, 77);

 fill(159, 242, 231);

fill(159, 242, 231);
for(var z=4; z<16; z++){
    rect(z*20,182,26,18);
    z++;
}

fill(159, 242, 231);
for(var z=4; z<16; z++){
    rect(z*20,223,26,18);
    z++;
}

fill(39, 217, 66);
rect(0,358,400,239);



  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
