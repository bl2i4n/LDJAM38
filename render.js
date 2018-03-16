//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;
//Create a Pixi Application
let app = new Application({
    width: 512,
    height: 512,
    antialiasing: true,
    transparent: false,
    resolution: 1
  }
);

//add the canvas that Pixi automatically created for you
document.body.appendChild(renderer.view);

loader
  .add([
    "images/earth_character.png",
    "images/heart.png",
    "images/evilplanet.png",
    "images/background.png"
  ])
  .load(setup);

  //Define variables that might be used in more
  //than one function
var earth, enemy, enemy2, enemy3, heart, heart2, heart3, state, message, menuScene;
//Aliases
// var Container = PIXI.Container,
//     autoDetectRenderer = PIXI.autoDetectRenderer,
//     loader = PIXI.loader,
//     resources = PIXI.loader.resources,
//     Sprite = PIXI.Sprite;
// //create pixi stage and renderer
// var stage = new PIXI.Container(),
//     renderer = PIXI.autoDetectRenderer(480, 480);
// document.body.appendChild(renderer.view);
//
// //Use Pixi's built-in `loader` object to load an image
// loader
//   .add([
//     "images/earth_character.png",
//     "images/heart.png",
//     "images/evilplanet.png",
//     "images/background.png"
//   ])
//   .load(setup);
//
// //define global variables
// var earth, enemy, enemy2, enemy3, heart, heart2, heart3, state, message, menuScene;
//
// //This `setup` function will run when the image has loaded
// function setup() {
//   menuScene = new PIXI.Container();
//   message = new Text("Menu");
//   // message.position.set(54, 96);
//   menuScene.addChild(message);
//
//   //set up bump library
//   b = new Bump(PIXI);
//   state = play;
//   //Create the `earth` sprite from the texture
//   earth = new Sprite(
//     PIXI.loader.resources["images/earth_character.png"].texture
//   );
//   earth.x = 210;
//   earth.y = 210;
//
//   //Create evil planet that moves automatically
//   enemy = new Sprite(
//     PIXI.loader.resources["images/evilplanet.png"].texture
//   );
//   enemy.x = 410;
//   enemy.y = 210;
//
//   enemy2 = new Sprite(
//     PIXI.loader.resources["images/evilplanet.png"].texture
//   );
//   enemy2.x = 410;
//   enemy2.y = 0;
//   enemy2.vx = 0;
//   enemy2.vy = 0;
//
//   enemy3 = new Sprite(
//     PIXI.loader.resources["images/evilplanet.png"].texture
//   );
//   enemy3.x = 410;
//   enemy3.y = 410;
//   enemy3.vx = 0;
//   enemy3.vy = 0;
//
//
//   var background = new Sprite(
//     PIXI.loader.resources["images/background.png"].texture
//   );
//
//   heart = new PIXI.Sprite(
//     PIXI.loader.resources["images/heart.png"].texture
//   );
//   heart2 = new PIXI.Sprite(
//     PIXI.loader.resources["images/heart.png"].texture
//   );
//   heart2.x = 30;
//   heart2.y = 0;
//
//   heart3 = new PIXI.Sprite(
//     PIXI.loader.resources["images/heart.png"].texture
//   );
//   heart3.x = 60;
//   heart3.y = 0;
//
//   stage.addChild(background);
//   stage.addChild(earth);
//   stage.addChild(enemy);
//   stage.addChild(enemy2);
//   stage.addChild(enemy3);
//   stage.addChild(heart);
//   stage.addChild(heart2);
//   stage.addChild(heart3);
//
//   console.log("in setup")
//   console.log(stage.children.length)
//
//   gameLoop();
// }
//
// function gameLoop() {
//   //Runs the current game `state` in a loop and renders the sprites
//   // Loop this function at 60 frames per second
//   requestAnimationFrame(gameLoop);
//   //Render the stage to see the animation
//   // renderer.render(menuScene);
//   renderer.render(stage);
//
//   state();
// }
//
// function play() {
//   // renderer.render(menuScene);
//   // heart.vx = 1;
//   //All the game logic goes here
//   //Move the enemy 1 pixel to the right each frame
//   enemy.x -= 1;
//   //why do these values make the enemy go down and to the left
//   enemy2.vx=-1;
//   enemy2.vy=1;
//   enemy2.x += enemy2.vx
//   enemy2.y += enemy2.vy
//
//   enemy3.vx = -1;
//   enemy3.vy = -1;
//   enemy3.x += enemy3.vx;
//   enemy3.y += enemy3.vy;
//
//   //check for a collision between the earth and the enemy
//   if (b.hitTestRectangle(earth, enemy)){
//     stage.removeChild(heart);
//     stage.removeChild(heart2);
//     stage.removeChild(heart3);
//     console.log("after collision")
//     console.log(stage.children.length);
//     earth.alpha = 0.5;
//     // console.log(stage.removeChild(enemy))
//     //if there is a collision, change the message text and change tint red
//     enemy.tint = 0xff3300;
//     enemy2.tint = 0xff3300;
//     enemy3.tint = 0xff3300;
//     if(stage.removeChild(heart) == true){
//       app.stage.addChild(gameOverScene);
//     }
//   } else{
//     //if thre is no collision reset the message and box color
//     enemy.tint = 0xccff99;
//     enemy2.tint = 0xccff99;
//     enemy3.tint = 0xccff99;
//   }
//
// }
//
//
// function end() {
//   //All the code that should run at the end of the game
// }

//The game's helper functions:
//`keyboard`, `hitTestRectangle`, `contain` and `randomInt`
