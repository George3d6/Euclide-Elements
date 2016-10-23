/*
*
*/

// Point, a class which holds two values representing coordinates on the X and Y axis
class Point {
  constructor(xAxis, yAxis) {
    this.x = xAxis;
    this.y = yAxis;
  }
}

// The path between two points
// The constructor takes as arguments two objects of type Point
class Line {
  constructor(pointOne, pointTwo) {
    this.start = pointOne;
    this.stop = pointTwo;
  }
}
