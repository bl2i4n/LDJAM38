// console.log("sadfasdfsadf");
// function onMouseMove(event) {
//   var xShift = event.clientX;
//   var yShift = event.clientY;
//   console.log("X:" + xShift);
//   console.log("Y:" + yShift);
// }
//x needs to increase or decrease
// xShift  goes up
// xShift goes down

// function checkX(event){
//   var xShift = event.clientX;
//   var yShift = event.clientY;
//
//   var oldX = 0;
//   var oldY = 0;
//
//   if (yShift >= 0.001 && yShift <= 5){
//     console.log("this is a sort of horiztonal straight line")
//   }
//     console.log("X:" + xShift);
//     console.log("Y:" + yShift);
// }
//
// $(document).ready(function() {
//   $(document).on("mousemove", checkX);
//   console.log($(document));
// });

var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", getMouseDirection, false);

var xDirection = "";
var yDirection = "";

var oldX = 0;
var oldY = 0;

function getMouseDirection(e) {
    //deal with the horizontal case
    if (oldX < e.pageX) {
        xDirection = "right";
        //two more if statements
    } else if (oldX > e.pageX){
        xDirection = "left";
    }

    //deal with the vertical case
    if (oldY < e.pageY) {
        yDirection = "down";
    } else if( oldY > e.pageY){
        yDirection = "up";
    }

    oldX = e.pageX;
    oldY = e.pageY;

    console.log(xDirection);
    console.log(yDirection)
}



//this gets the global mouse position maybe outside of the window
// PIXI.Stage.prototype.getMousePosition = function()
// {
//     return this.interactionManager.mouse.global;
// };

// yshift needs to stay between a certain range
//
// and then the opposite for horiztonal lines
// y shift goes up and down
//
// xshift needs to stay a certain range
//
// how to check if a triangle was drawn
