///import { gameView, gameViewCTX, imgBg } from "./canvas.js"; 
import { sceneList } from "./scenes.js";
//importing my scenes file, which has all of my text and images stored on it

// const btnLeft = document.getElementById("btnLeft");
// const btnRight = document.getElementById("btnRight");
//const btnForward = document.getElementById("btnForward");
//const btnBack = document.getElementById("btnBack");
const btnNext = document.getElementById("btnNext");
let optionBtn1 = document.getElementById("option1");
let optionBtn2 = document.getElementById("option2");
let optionBtn3 = document.getElementById("option3");
let currScene;
//initializing all my buttons and the current scene

let char1 = document.getElementById("char1");
let char2 = document.getElementById("char2");
let defaultBg = document.getElementById("defaultBg");
//let defaultTextBox = document.getElementById("defaultTextBox");
let textMain = document.getElementById("textMain");
//getting my images and text from html

//btnForward.addEventListener("click", forwardClicked);
//btnLeft.addEventListener("click", leftClicked);
//btnRight.addEventListener("click", rightClicked);
//btnBack.addEventListener("click", backClicked);
btnNext.addEventListener("click", nextClicked);
optionBtn1.addEventListener("click", () => {optionsBtns(0)});
optionBtn2.addEventListener("click", () => {optionsBtns(1)});
optionBtn3.addEventListener("click", () => {optionsBtns(2)});
//getting my buttons from html

class UiHandler {
    //this class handles everything that the ui has to load and do
    constructor(){
        currScene = sceneList.find(scene => scene.title == "START_MAIN");
        //sets the default scene to the start, making it always start where it needs to
        textMain.innerText = currScene.text[0];
        //tells the text to go to the first item in the scene object text array
        char1.src = currScene.char1Img;
        char2.src = currScene.char2Img;
        defaultBg.src = currScene.bgImg;
        //grabs the images from the scense file
        this.hideOptions();
        //will hide the options that you ca nclick on later when it needs to, is initialized now
    }
    
    hideOptions() {
        optionBtn1.style.display = "none";
        optionBtn2.style.display = "none";
        optionBtn3.style.display = "none";
        //sets the buttons to d-none
    }

    showOptions() {
        optionBtn1.style.display = "block";
        optionBtn2.style.display = "block";
        optionBtn3.style.display = "block";
        //redisplays the buttons 

        optionBtn1.textContent = currScene.options[0].text;
        optionBtn2.textContent = currScene.options[1].text;
        optionBtn3.textContent = currScene.options[2].text;
        //give the buttons text when they load in. the text is set in the scene object and given a specific value
    }

    changeScene(value) {
        //handles changing the scenes
        if (currScene.options == undefined) {
            return;
        }
        //checks to see if there is an option button to load
        var optId = currScene.options[value].optScene;
        //declairs the option id variable
        currScene = sceneList.find(scene => scene.id == optId);
        //makes the current scene load as the selected option
        char1.src = currScene.char1Img;
        char2.src = currScene.char2Img;
        defaultBg.src = currScene.bgImg;
        //makes sure that the right images are loaded on the scene change 
    }

}

let ui = new UiHandler();
//activates the entire UiHandler class

function nextClicked() {
    //this function runs everytime the next button is clicked
    if (currScene.text.length - 1 == currScene.currSceneDia) {
        //checks the length of the text array for dialogue remaining in that array
        if (currScene.title != "START_ENDING") {
            //checks to see if the scene title is the end scene
            textMain.textContent = "(Click next!)";
            //if it's not the end scene, it displays the "Click Next!" text
        }
        if (currScene.options == undefined || currScene.options.length == 0) {
            //we now check to see if the options are availible to be loaded
            if (currScene.forceScene != undefined) {
                currScene = sceneList.find(scene => scene.id == currScene.forceScene);
                char1.src = currScene.char1Img;
                char2.src = currScene.char2Img;
                defaultBg.src = currScene.bgImg;
                //this if checks to see if a scene has options to choose from. if it does it forces the end of the array to move to the scene that the option selected is supposed to mvoe to, and load the correct images.
            } else {
                currScene = sceneList.find(scene => scene.id == currScene.id + 1);
                char1.src = currScene.char1Img;
                char2.src = currScene.char2Img;
                defaultBg.src = currScene.bgImg;
                return;
                //if the scene doesn't have options, it just +1s to the next scene id, therefor loading the correct scene in the correct order
            }
        } else {
            ui.showOptions();
            //if there are options to be shown, this shows them
        }
    } else {
        currScene.currSceneDia++;
        //this takes the text array and ++s it everytime you hit next, making the text flow along
        textMain.textContent = currScene.text[currScene.currSceneDia];
        //sets the text content to == the current text in the text array
    }
};

function optionsBtns(value) {
    //console.log("asdf")
    ui.changeScene(value);
    ui.hideOptions();
    return;
    //this function handles the option buttons. when one is clicked, it takes the value that that button has and changes the scene to that value. it then hides the buttons once theyve been clicked
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
//none of these were needed