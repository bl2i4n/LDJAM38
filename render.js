//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;
//create pixi stage and renderer
var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(480, 480);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add([
    "images/earth_character.png",
    "images/heart.png",
    "images/evilplanet.png",
    "images/background.png"
  ])
  .load(setup);

//define global variables
var earth, enemy, numOfHearts, state, message;

//This `setup` function will run when the image has loaded
function setup() {
  message = new Text(
  {fontFamily: "Arial", fontSize: 32, fill: "white"}
  );

  //set up bump library
  b = new Bump(PIXI);
  state = play;
  //Create the `earth` sprite from the texture
  earth = new PIXI.Sprite(
    PIXI.loader.resources["images/earth_character.png"].texture
  );
  earth.x = 210;
  earth.y = 210;

  //Create evil planet that moves automatically
  enemy = new PIXI.Sprite(
    PIXI.loader.resources["images/evilplanet.png"].texture
  );
  enemy.x = 410;
  enemy.y = 210;

  var background = new PIXI.Sprite(
    PIXI.loader.resources["images/background.png"].texture
  );

  //variable for score
  // var message = new Text(
  //   "Score 999",
  //   {fontFamily: 'Arial', fontSize: 32, fill: "white"}
  // );
  // stage.addChild(message);
  stage.addChild(background);
  stage.addChild(earth);
  stage.addChild(enemy);

  //Code for hearts/lives
  numOfHearts = 5;
  for (var i=0;i<numOfHearts; i++){
    var heart = new PIXI.Sprite(
      PIXI.loader.resources["images/heart.png"].texture
    );
    var offSetHearts = 27 * i;
    heart.x = 10 + offSetHearts;
    heart.y = 10;
    stage.addChild(heart);
  }


  //Start the game loop
  gameLoop();
}

function gameLoop() {
  //Runs the current game `state` in a loop and renders the sprites
  // Loop this function at 60 frames per second
  requestAnimationFrame(gameLoop);
  //Render the stage to see the animation
  renderer.render(stage);

  state();
}

function play() {
  //All the game logic goes here
  //Move the enemy 1 pixel to the right each frame
  enemy.x -= 1;

  //check for a collision between the cat and the box
  if (b.hitTestRectangle(earth, enemy)){
     //if there is a collision, change the message text and change tint red
     message.text = "hit!";
     enemy.tint = 0xff3300;
     numOfHearts -= 1;
  } else{
    //if thre is no collision reset the message and box color
    message.text = "No collision...";
    enemy.tint = 0xccff99;
  }
}


function end() {
  //All the code that should run at the end of the game
}

//The game's helper functions:
//`keyboard`, `hitTestRectangle`, `contain` and `randomInt`
