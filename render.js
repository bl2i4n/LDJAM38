var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(480, 480);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add([
    "images/earth_character.png",
    "images/heart.png"
  ])

  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the `earth` sprite from the texture
  var earth = new PIXI.Sprite(
    PIXI.loader.resources["images/earth_character.png"].texture
  );
  earth.x = 210;
  earth.y = 210;

  //Code for hearts/lives
  var numOfHearts = 5;
  for (var i=0;i<numOfHearts; i++){
    var heart = new PIXI.Sprite(
      PIXI.loader.resources["images/heart.png"].texture
    );
    var offSetHearts = 27 * i;
    heart.x = 10 + offSetHearts;
    heart.y = 10;
    stage.addChild(heart);
  };
  //variable for score
  var message = new Text(
    "Score 999",
    {fontFamily: 'Arial', fontSize: 32, fill: "white"}
  );
  message.x = 250;
  message.y = 10;
  //Add the heart to the stage
  stage.addChild(earth);
  //add messaging to stage
  stage.addChild(message);

  //Render the stage
  renderer.render(stage);
}







function gameLoop() {
  //Runs the current game `state` in a loop and renders the sprites
}

function play() {
  //All the game logic goes here
}

function end() {
  //All the code that should run at the end of the game
}

//The game's helper functions:
//`keyboard`, `hitTestRectangle`, `contain` and `randomInt`
