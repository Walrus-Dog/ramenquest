export const gameView = document.getElementById('gameView');
export const gameViewCTX = gameView.getContext('2d');
export var imgBg;

//very specific order for stuff
gameViewCTX.fillStyle = "#DB7C08";
gameViewCTX.fillRect(0, 0, 1400, 900);
gameViewCTX.strokeRect(0, 750, 1400, 900);

//bg image loader
var imgBg = new Image();
imgBg.src = "./media/1536978149483.jpg";

imgBg.addEventListener("load", e => {
    gameViewCTX.drawImage(imgBg, 0 ,0, 1400, 900 ,0 ,0, 1400, 750);
});

//char1 image loader
var char1 = new Image();
char1.src = "./media/__jangoboye.jpg";

char1.addEventListener("load", e => {
    gameViewCTX.drawImage(char1, 0, 350, 400, 400);
});

//char2 iamge laoder
var char2 = new Image();
char2.src = "./media/__jangoboye.jpg";

char2.addEventListener("load", e => {
    gameViewCTX.drawImage(char2, 1000, 350, 400, 400);
});

gameViewCTX.fillStyle = "#DB7C0";
gameViewCTX.fillRect(0, 700, 1400, 900);
gameViewCTX.fillStyle = "white";
gameViewCTX.font = "30px Arial";
gameViewCTX.fillText("Hello worl", 10, 800);

