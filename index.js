/*
 Program   :  Drum Kit
 Programmer: The App Brewery with JavaScript and CSS by William Hunt
 Date      : 7/20/2021
 Purpose   : This is the JS file to accompany the short project, Drum Kit. The Purpose
             of the project is to attach background images to buttons, to attach sound  
             objects to the buttons using the switch statement and to attach event listeners
             to the buttons. We also attached evenlisteners to the keyboard and used the 
             switch statement to attach sound objects to the relevant keys to play drum 
             sounds. Unassigned keys print to the console.
*/
"use strict";
var numOfBtns = document.querySelectorAll(".drum").length;
var i = 0;
// Add event listeners to all buttons
for (i = 0; i < numOfBtns; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    // Determine which button is clicked, and play the sound object attached to it.
    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();

      default:
        console.log(buttonInnerHTML);
    }
  });
}

// add keydown event listener

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
});

// Use event.key with switch to choose a drum sound
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(key);
  }
}
