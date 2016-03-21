/**
 * Created by Oleg_Rovenskyi on 3/18/2016.
 */
var myGamePiece,
    redGamePiece,
    blueGamePiece,
    yellowGamePiece;
var doc = document;

function startGame() {
    myGamePiece = new Component(75, 75, "red", 10, 10);
    //redGamePiece = new Component(75, 75, "red", 10, 10);
    //blueGamePiece = new Component(75, 75, "yellow", 50, 60);
    //yellowGamePiece = new Component(75, 75, "blue", 10, 110);

    myGameArea.start();
}

var myGameArea = {
    canvas : doc.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        doc.getElementById('canvas').appendChild(this.canvas);
        this.interval = setInterval(updateGameArea, 20);

        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
        });
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        var ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    };
}

function updateGameArea() {
    myGameArea.clear();

    //redGamePiece.x += 1;
    //yellowGamePiece.x += 1;
    //yellowGamePiece.y += 1;
    //blueGamePiece.x += 1;
    //blueGamePiece.y -= 1;

    //redGamePiece.update();
    //yellowGamePiece.update();
    //blueGamePiece.update();

    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }

    myGamePiece.newPos();
    myGamePiece.update();
}

function moveup() {
    myGamePiece.speedY -= 1;
}

function movedown() {
    myGamePiece.speedY += 1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}

startGame();