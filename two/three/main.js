/*
*
*/

//Define some global variables
let paper = document.getElementById('paper');
let context = paper.getContext('2d');

// Point, a class which holds two values representing coordinates on the X and Y axis
class Point {
  constructor(xAxis, yAxis) {
    this.x = xAxis;
    this.y = yAxis;
  }
  draw(ctx) {
    ctx.fillStyle = "rgb(35, 35, 35)";
    ctx.fillRect(this.x, this.y, 2, 2);
  }
}

// The path between two points
// The constructor takes as arguments two objects of type Point
class Line {
  constructor(pointOne, pointTwo) {
    this.start = pointOne;
    this.stop = pointTwo;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.stop.x, this.stop.y);
    ctx.stroke();
  }
}

// Used to represent a Circle
// Takes as an argument two points, the first one being the center point
class Circle {
  constructor(pointOne, pointTwo) {
    this.center = pointOne;
    this.edge = pointTwo;
    this.radius = this.computeRadius();
  }
  draw(ctx) {
    context.beginPath();
    context.moveTo(this.center.x + this.radius, this.center.y);
    context.arc(this.center.x, this.center.y, this.radius, 0, 2*Math.PI);
    context.stroke();
  }
  computeRadius() {
    let diffX = this.center.x - this.edge.x;
    let diffY = this.center.y - this.edge.y;
    let length =  Math.sqrt( Math.pow(diffX, 2) + Math.pow(diffY, 2) ) ;
    return Math.abs(length);
  }
}

let circle = new Circle(new Point(200,200), new Point(300,300));
circle.draw(context);




































































//End here(for formating purposes)
