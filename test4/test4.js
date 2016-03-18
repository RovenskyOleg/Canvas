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

canvas.width = 500;
canvas.height = 400;

context.lineWidth = 5;

context.beginPath();

context.arc(x, y, radius, startAngle, endAngle, counterClockwise);

// line color
context.strokeStyle = "black";
context.stroke();