import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Ball2 from './Ball2';
import Ball3 from './Ball3';
import { SVG_NS, KEYS } from "../settings";


export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);

    this.paddleWidth = 8;
    this.paddleHeight = 56;
    this.boardGap = 10;

    // this.gameStart = new gameStart(
    // this.ball,
    // KEYS.n
    // );



    this.player1 = new Paddle(
      this.height, //board height
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      ((this.height - this.paddleHeight) / 2), // y position of paddle
      KEYS.a,
      KEYS.z
    );

    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      (this.width - this.boardGap - this.paddleWidth),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down
    );

    this.ball = new Ball(8, this.width, this.height);
    this.ball2 = new Ball2(5, this.width, this.height);
    this.ball3 = new Ball3(7, this.width, this.height);

    this.score1 = new Score(this.width / 2 - 50, 30, 30);
    this.score2 = new Score(this.width / 2 + 25, 30, 30);

    document.addEventListener('keydown', (event) => {
      console.log(event);
    
      switch (event.key) {
        case KEYS.spaceBar:
          this.pause = !this.pause;
          break;
      }
      console.log(this.pause);

      
    });

  } // end of constructor

  // addBall2() {
  //   let addBall2 = new addBall2;
  //   if (player.goal){
  //     addBall2()
  //   }
  //   }
  
  // }
    


  render() {
    if(this.pause) {
      return;
    }

    this.gameElement.innerHTML = '';

    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    this.board.render(svg);
    this.player1.render(svg);
    this.player2.render(svg);
    this.ball.render(svg, this.player1, this.player2);
    this.ball2.render(svg, this.player1, this.player2);
    this.ball3.render(svg, this.player1, this.player2);

    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);



  }

} // end of Game class
