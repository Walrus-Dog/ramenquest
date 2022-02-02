///import { gameView, gameViewCTX, imgBg } from "./canvas.js"; 
import { sceneList } from "./scenes.js";

// const btnLeft = document.getElementById("btnLeft");
// const btnRight = document.getElementById("btnRight");
//const btnForward = document.getElementById("btnForward");
//const btnBack = document.getElementById("btnBack");
const btnNext = document.getElementById("btnNext");
let optionBtn1 = document.getElementById("option1");
let optionBtn2 = document.getElementById("option2");
let optionBtn3 = document.getElementById("option3");
let currScene;

let char1 = document.getElementById("char1");
let char2 = document.getElementById("char2");
let defaultBg = document.getElementById("defaultBg");
let defaultTextBox = document.getElementById("defaultTextBox");
let textMain = document.getElementById("textMain");

//btnForward.addEventListener("click", forwardClicked);
btnNext.addEventListener("click", nextClicked);
optionBtn1.addEventListener("click", () => {optionsBtns(0)});
optionBtn2.addEventListener("click", () => {optionsBtns(1)});
optionBtn3.addEventListener("click", () => {optionsBtns(2)});
//btnLeft.addEventListener("click", leftClicked);
//btnRight.addEventListener("click", rightClicked);
//btnBack.addEventListener("click", backClicked);

class UiHandler {
    constructor(){
        currScene = sceneList.find(scene => scene.title == "START_MAIN");
        textMain.innerText = currScene.text[0];
        char1.src = currScene.char1Img;
        char2.src = currScene.char2Img;
        defaultBg.src = currScene.bgImg;
        this.hideOptions();
    }
    
    hideOptions() {
        optionBtn1.style.display = "none";
        optionBtn2.style.display = "none";
        optionBtn3.style.display = "none";
    }

    showOptions() {
        optionBtn1.style.display = "block";
        optionBtn2.style.display = "block";
        optionBtn3.style.display = "block";

        optionBtn1.textContent = currScene.options[0].text;
        optionBtn2.textContent = currScene.options[1].text;
        optionBtn3.textContent = currScene.options[2].text;
    }

    changeScene(value) {
        if (currScene.options == undefined) {
            return;
        }
        var optId = currScene.options[value].optScene;
        currScene = sceneList.find(scene => scene.id == optId);
        char1.src = currScene.char1Img;
        char2.src = currScene.char2Img;
        defaultBg.src = currScene.bgImg;
    }

}

let ui = new UiHandler();

function nextClicked() {
    if (currScene.text.length - 1 == currScene.currSceneDia) {
        if (currScene.title != "START_ENDING") {
            textMain.textContent = "(Click next!)";
        }
        if (currScene.options == undefined || currScene.options.length == 0) {
            if (currScene.forceScene != undefined) {
                currScene = sceneList.find(scene => scene.id == currScene.forceScene);
                char1.src = currScene.char1Img;
                char2.src = currScene.char2Img;
                defaultBg.src = currScene.bgImg;
            } else {
                currScene = sceneList.find(scene => scene.id == currScene.id + 1);
                char1.src = currScene.char1Img;
                char2.src = currScene.char2Img;
                defaultBg.src = currScene.bgImg;
                return;
            }
        } else {
            ui.showOptions();
        }
    } else {
        currScene.currSceneDia++;
        textMain.textContent = currScene.text[currScene.currSceneDia];
    }
};

function optionsBtns(value) {
    console.log("asdf")
    ui.changeScene(value);
    ui.hideOptions();
    return;
};

//handles all forward scene changes
// function forwardClicked() {
//     console.log("click");
// };

// //handles all left scene changes
// function leftClicked() {
//     console.log("lcickeld")
// }

// //handles all right scene changes
// function rightClicked() {
//     console.log("something")
// }

// //will only be used if secrets are implemented
// function backClicked() {
//     console.log("asfg")
// }