import { SVG_NS } from "../settings.js";


export default class Paddle {
    constructor(boardHeight, width, height, x, y, up, down, /*color*/) {
      this.boardHeight = boardHeight;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.speed = 10;
      this.score = 0;
    //   this.color = 

      document.addEventListener("keydown", event => {
        switch (event.key) {
            case up:
              this.up();
              break;
            case down:
              this.down();
              break;
          }
      });
    }
    // end of constructor
    // arrow function sdon't have a this context, that means this is still refering to the object that we make when we say const player1=new paddle();
    // ()=> {}

     //has it's own context for this which can cause issues.
     //function(){}

    up() {
        this.y = this.y - this.speed;
        this.y = Math.max(0, this.y - this.speed);
        // if(this.y <= 0 ) {
        //     this.y = 0 ;
        // }
      // get the max number...
      // either 0 or the y position minus speed
      // current y position of the paddle  -10px 



    }


    down() {
        this.y = this.y + this.speed;
        this.y = Math.min( this.boardHeight - this.height, this.y + this.speed);
    }

    coordinates(x, y, width, height){
      let leftX = x;
      let rightX = x + width;
      let topY = y;
      let bottomY = y + height;
      return [leftX, rightX, topY, bottomY];
    }


    render(svg){
      //...
      let rect = document.createElementNS(SVG_NS, 'rect');
      rect.setAttributeNS(null, 'fill', '#B5E8AC');
      rect.setAttributeNS(null, 'width', this.width);
      rect.setAttributeNS(null, 'height', this.height);
      rect.setAttributeNS(null, 'stroke', 'black');
      rect.setAttributeNS(null, 'x', this.x);
      rect.setAttributeNS(null, 'y', this.y);
      rect.setAttributeNS(null,'rx', '5');
      rect.setAttributeNS(null,'ry', '5');
    svg.appendChild(rect);


    }

}