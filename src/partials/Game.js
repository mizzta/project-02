import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
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
      // this.boardGap + 486,
      (this.width - this.boardGap - this.paddleWidth),
      ((this.height - this.paddleHeight) / 2),
      KEYS.up,
      KEYS.down
    );

    this.Ball = new Ball(8, this.width, this.height);

} // end of constructor (only one constructor)

render() {
  // More code goes here....
  // add the code from the slide
  this.gameElement.innerHTML = '';

  let svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttributeNS(null, "width", this.width);
  svg.setAttributeNS(null, "height", this.height);
  svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
  this.gameElement.appendChild(svg);


// the board should be the first or else you may have a bad time
  this.board.render(svg);
  this.player1.render(svg);
  this.player2.render(svg);
  this.Ball.render(svg, this.player1, this.player2);
}

} // end of Game class
