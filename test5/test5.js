/**
 * Created by Oleg_Rovenskyi on 3/18/2016.
 */
var redGamePiece, blueGamePiece, yellowGamePiece;

function startGame() {
    redGamePiece = new Component(75, 75, "red", 10, 10);
    blueGamePiece = new Component(75, 75, "yellow", 50, 60);
    yellowGamePiece = new Component(75, 75, "blue", 10, 110);

    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    myGameArea.clear();

    redGamePiece.x += 1;
    yellowGamePiece.x += 1;
    yellowGamePiece.y += 1;
    blueGamePiece.x += 1;
    blueGamePiece.y -= 1;

    redGamePiece.update();
    yellowGamePiece.update();
    blueGamePiece.update();
}

startGame();