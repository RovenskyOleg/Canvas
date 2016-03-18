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
context.lineJoin = 'miter'; // miter round bevel
context.miterLimit = 1;

context.beginPath();
context.moveTo(100, 100);
context.lineTo(400, 100);
context.lineTo(100, 300);
context.fillStyle = '#00ff00';
context.strokeStyle = '#ff0000';
context.closePath();

context.fill(); // context.stroke() context.fill()
context.stroke(); // context.stroke() context.fill()

context.setLineDash([10, 20, 5]);
context.beginPath();
context.moveTo(25,25);
context.lineTo(205,25);
context.stroke(); // context.stroke() context.fill()

context.setLineDash([10, 20]);
context.beginPath();
context.moveTo(800,50);
context.lineTo(205,50);
context.stroke(); // context.stroke() context.fill()

