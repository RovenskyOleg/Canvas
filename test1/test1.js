/**
 * Created by Oleg_Rovenskyi on 3/17/2016.
 */
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 400;

context.beginPath();
context.lineWidth = 15;
context.strokeStyle = 'green';

context.moveTo(20, 75);
context.lineTo(350, 275);
context.stroke();

context.beginPath();
context.strokeStyle = 'purple';
context.moveTo(400, 50);
context.lineTo(20, 330);
context.stroke();