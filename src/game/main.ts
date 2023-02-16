import { Actor, CollisionType, Color, Engine, vec } from "excalibur";
import { io } from 'socket.io-client';

const socket = io();

// game.js

// start-snippet{create-engine}
// Create an instance of the engine.
// I'm specifying that the game be 800 pixels wide by 600 pixels tall.
// If no dimensions are specified the game will fit to the screen.
const game = new Engine({
  width: 800,
  height: 600,
});

// start-snippet{start-game}
// Start the engine to begin the game.
game.start();
// end-snippet{start-game}

socket.on('player join', function({player_id}: {player_id: string}){
  const ball = new Actor({
    x: 100,
    y: 300,
    // Use a circle collider with radius 10
    radius: 10,
    // Set the color
    color: Color.Red,
  });
  // Start the serve after a second
  const ballSpeed = vec(100, 100);
  setTimeout(() => {
    // Set the velocity in pixels per second
    ball.vel = ballSpeed;
  }, 1000);

  ball.body.collisionType = CollisionType.Passive;
  game.add(ball);

  // start-snippet{screen-collision}
  // Wire up to the postupdate event
  ball.on("postupdate", () => {
    // If the ball collides with the left side
    // of the screen reverse the x velocity
    if (ball.pos.x < ball.width / 2) {
      ball.vel.x = ballSpeed.x;
    }

    // If the ball collides with the right side
    // of the screen reverse the x velocity
    if (ball.pos.x + ball.width / 2 > game.drawWidth) {
      ball.vel.x = ballSpeed.x * -1;
    }

    // If the ball collides with the top
    // of the screen reverse the y velocity
    if (ball.pos.y < ball.height / 2) {
      ball.vel.y = ballSpeed.y;
    }
    if (ball.pos.y + ball.height / 2 > game.drawHeight) {
      ball.vel.y = ballSpeed.y * -1;
    }
  });

});

