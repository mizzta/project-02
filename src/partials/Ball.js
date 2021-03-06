import { SVG_NS } from "../settings";


export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.ping = new Audio('public/sounds/pong-01.wav');

    this.reset();
  } // end of constructor

  goal(player) {
    player.score++;
    this.reset();
    console.log(player.score);
  } // end of goal method

  // addBall(){
  //   if (this.goal){
      
  //   }
  // }

  // speedUp() {
  //   this.reset();
  //   this.ball++;
  // }

  reset() {
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));


  } // end of reset

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;
    if (hitLeft || hitRight) {
      this.vx = -this.vx;
    } else if (hitTop || hitBottom) {
      this.vy = -this.vy;
    }
  } // end of wallcollision

  paddleCollision(player1, player2) {
    if (this.vx > 0) {
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
      let [leftX, rightX, topY, bottomY] = paddle;
      if (
        (this.x + this.radius >= leftX) &&
        (this.x + this.radius <= rightX) &&
        (this.y >= topY && this.y <= bottomY)
      ) {
        this.vx = -this.vx;
        player1.height -= 10;
        this.ping.play();
      } // end of if
    } else {
      //check the paddle collision
      let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
      let [leftX, rightX, topY, bottomY] = paddle;
      if (
        (this.x - this.radius <= rightX) &&
        (this.x - this.radius >= leftX) &&
        (this.y >= topY && this.y <= bottomY)

      ) {
        this.vx = -this.vx;
        player2.height -= 10;
        this.ping.play();
      }
    }

  } // end of paddlecollision

  // hitPaddle(ball, player1, player2)
  //   if (hitPaddle){
  //       let hitPaddle = (player2.x, player2.y, player2.width, player2.height);
  //       let [leftX, rightX, topY, bottomY] = paddle;
  //       if()
  //   }
  //   );


  render(svg, player1, player2) {
    // update x position with vector direction 60 times a second
    this.x += this.vx;
    this.y += this.vy;

    // this.gameStart;

    this.wallCollision();
    this.paddleCollision(player1, player2);

    //draw ball
    let circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttributeNS(null, 'r', '8');
    circle.setAttributeNS(null, 'cx', this.x); // x position
    circle.setAttributeNS(null, 'cy', this.y); // y position
    circle.setAttributeNS(null, 'fill', '#FCBCD2');

    svg.appendChild(circle);

    const rightGoal = this.x + this.radius >= this.boardWidth;
    const leftGoal = this.x - this.radius <= 0;
    if (rightGoal) {
      this.goal(player1);
      this.direction = 1;
    } else if (leftGoal) {
      this.goal(player2);
      this.direction = -1;
    }

  } // end of render method

} // end of ball classs