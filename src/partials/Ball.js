import { SVG_NS, KEYS } from "../settings";

export default class Ball {
    constructor(radius, boardWidth, boardHeight, /*color*/) {
      this.radius = radius;
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.direction = 1;
      // this.color = 
    } // end of constructor

    reset() {
      this.x = this.boardWidth / 2;
      this.y = this.boardHeight / 2;
    }

    render(svg, player1, player2) {
      //...
        let circle =  document.createElementNS(SVG_NS, 'circle');
        circle.setAttributeNS(null, 'r', '8');
        circle.setAttributeNS(null, 'cx', this.boardWidth /2); // x position
        circle.setAttributeNS(null, 'cy', this.boardHeight /2);
        circle.setAttributeNS(null, 'fill', '#FCBCD2');

        svg.appendChild(circle);



    }

  } // end of Ball classs