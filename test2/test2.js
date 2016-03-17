/**
 * Created by Oleg_Rovenskyi on 3/17/2016.
 */
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 400;

context.lineWidth = 45;
context.lineCap = 'butt'; //butt round square
//context.lineJoin = ',iter'; // miter round bevel
context.miterLimit = 2.1;

//context.setLineDash([10, 20, 5]);

context.beginPath();
context.moveTo(100, 100);
context.lineTo(400, 100);
context.lineTo(100, 300);

context.stroke(); // context.stroke() context.fill()