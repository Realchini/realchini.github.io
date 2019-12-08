//function draw() {
//  var canvas = document.getElementById('myCanvas');
//  if (canvas.getContext) {
//    var ctx = canvas.getContext('2d');
//
//    ctx.fillRect(25,25,100,100);
//    ctx.clearRect(45,45,60,60);
//    ctx.strokeRect(50,50,50,50);
//  }
//}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0, 20);
ctx.lineTo(20, 80);
ctx.lineTo(70, 100);
ctx.stroke();