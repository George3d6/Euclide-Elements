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

let testPoint = new Point(150, 250);
testPoint.draw(context);
let secondTestPoint = new Point(50, 120);
secondTestPoint.draw(context);
let testLine = new Line(testPoint, secondTestPoint);
testLine.draw(context);














































































//End here(for formating purposes)
