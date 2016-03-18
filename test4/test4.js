/**
 * Created by Oleg_Rovenskyi on 3/18/2016.
 */
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');

var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 75;
var startAngle = 1.1 * Math.PI;
var endAngle = 1.9 * Math.PI;
var counterClockwise = false;

canvas.width = 1000;
canvas.height = 800;

context.lineWidth = 5;

context.beginPath();

context.arc(x, y, radius, startAngle, endAngle, counterClockwise);

// line color
context.strokeStyle = "black";
context.stroke();

// Квадратичная кривая
context.beginPath();
context.moveTo(188, 150);
context.quadraticCurveTo(288, 0, 388, 150);
context.lineWidth = 10;
// line color
context.strokeStyle = "black";
context.stroke();

// Кривая Безье
context.beginPath();
context.moveTo(188, 130);
context.bezierCurveTo(140, 10, 388, 10, 388, 170);
context.lineWidth = 10;
// line color
context.strokeStyle = "black";
context.stroke();