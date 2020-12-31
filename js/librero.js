var sketchProc = function(processingInstance) {

  with (processingInstance) {
size(400,400);
//Nombrar libros del primer piso
var book = [
{
    title: "The Giver",
    stars: 1,
    pag:"N. paginas "+31
},
{
    title: "Bajo la misma luna",
    stars: 1,
    pag:"N. paginas "+70
},
{
    title: "Stranger things",
    stars: 1,
    pag:"N. paginas "+220
}
];

//Nombrar libros del segundo piso
var book2 = [
{
    title: "The nun",
    stars: 1,
    pag:"N. paginas "+90
},
{
    title: "Raven",
    stars: 1,
    pag:"N. paginas "+300
},
{
    title: "Oasis",
    stars: 1,
    pag:"N. paginas "+450
}
    ];

//Nombrar libros del tercer piso
var book3 = [
{
    title: "Corazon de tinta",
    stars: 1,
    pag:"N. paginas "+600
},
{
    title: "Hasta el mas allá",
    stars: 1,
    pag:"N. paginas "+240
},
{
    title: "Cronicas de un rey",
    stars: 1,
    pag:"N. paginas "+ 430
}
    ];

// draw shelf
for (var i=0; i<4; i++){
fill(13, 117, 133);
rect(0, 120*i, width, 10);
}

for (var j=0; j<book.length;j++){
    fill(25, 171, 171);
    rect(10+j*100, 20, 90, 100);
    fill(47, 175, 247);
    rect(10+j*100, 138, 90, 100);
    fill(205, 184, 167);
    rect(10+j*100, 257, 90, 100);
    fill(0, 0, 0);
    /**/
    fill(255, 71, 171);
    rect(113+j*100, 20, 90, 100);
    fill(247, 15, 247);
    rect(113+j*100, 138, 90, 100);
    fill(165, 84, 167);
    rect(113+j*100, 257, 90, 100);
    fill(0, 0, 0);
    /**/
    fill(255, 171, 71);
    rect(213+j*100, 20, 90, 100);
    fill(247, 15, 100);
    rect(213+j*100, 138, 90, 100);
    fill(165, 14, 16);
    rect(213+j*100, 257, 90, 100);
    fill(0, 0, 0);


for (var k=0; k < book.length; k++){
    text(book[k].title, 15 + k * 100, 29, 89, 100);
    text(book2[k].title, 15 + k * 100, 150, 92, 100);
    text(book3[k].title, 15 + k * 100, 265, 70, 100);

    text(book[k].pag, 15 + k * 100, 70, 70, 100);
    text(book2[k].pag, 15 + k * 100, 187, 70, 100);
    text(book3[k].pag, 15 + k * 100, 306, 70, 100);
}

for (var k=0; k < 3; k++){
    getImage("../images/1.jpg");

}
for (var k=0; k < 3; k++){
    image(getImage("cute/Star"),44 + k *0 + k*100, 207, 20, 30);

}
for (var k=0; k < 3; k++){
    image(getImage("cute/Star"),44 + k *-8 + k*108, 327, 20, 30);

}
}


  }
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc);
