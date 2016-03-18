/**
 * Created by Oleg_Rovenskyi on 3/18/2016.
 */
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 400;

canvas.strokeStyle = '#000';

context.lineWidth = 5;

context.beginPath();

//context.rect(30, 30, 150, 150);
context.fillRect(30, 30, 150, 150);
//context.stroke();

