/*
*
*/

//Define some global variables
let paper = document.getElementById('paper');
let context = paper.getContext('2d');
let select = document.getElementById('select');
let oldPoint = null;

// Point, a class which holds two values representing coordinates on the X and Y axis
class Point {
  constructor(xAxis, yAxis, notation) {
    this.x = xAxis;
    this.y = yAxis;
    this.notation = notation;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.x + 1, this.y);
    ctx.arc(this.x, this.y, 1, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillText(this.notation, this.x, this.y);
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
    this.start.draw(ctx);
    this.stop.draw(ctx);
  }
  //Draws an infinite line which contains our straight line
  extendToInfinity(ctx) {
    let slope = (this.start.y - this.stop.y)/(this.start.x - this.stop.x);
    let b = this.stop.y - slope*this.stop.x;
    let x1 = 0;
    let y1 = x1*slope + b;
    let x2 = 500;
    let y2 = x2*slope + b;
    let infiniteLine = new Line(new Point(x1, y1, ''),
      new Point(x2, y2, ''));
    infiniteLine.draw(ctx);
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
    ctx.beginPath();
    ctx.moveTo(this.center.x + this.radius, this.center.y);
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    this.center.draw(ctx);
    this.edge.draw(ctx);
  }
  computeRadius() {
    let diffX = this.center.x - this.edge.x;
    let diffY = this.center.y - this.edge.y;
    let length = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    return Math.abs(length);
  }
}

// The function draw will look at the select element and based on its
// content draw a point, line or cricle
function draw(event) {
  let point = new Point(event.offsetX, event.offsetY, document.getElementById('notation').value);
  switch(select.value) {
    case 'point':
    point.draw(context);
    break;
    case 'line':
    if(oldPoint == null) {
      oldPoint = point;
    } else {
      let line = new Line(oldPoint, point);
      line.draw(context);
      oldPoint = null;
    }
    break;
    case 'circle':
    if(oldPoint == null) {
      oldPoint = point;
    } else {
      let circle = new Circle(oldPoint, point);
      circle.draw(context);
      oldPoint = null;
    }
    break;
    case 'infinite':
    if(oldPoint == null) {
      oldPoint = point;
    } else {
      let line = new Line(oldPoint, point);
      line.extendToInfinity(context);
      oldPoint = null;
    }
    break;
    default:
    console.log('There was an error, the value of select was: ' + select.value);
    break;
  }
}






//Event listeners

//Draw a shape based on the mouse clicks of the user
paper.addEventListener('click', draw);

















//End here(for formating purposes)
