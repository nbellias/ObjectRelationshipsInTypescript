/*
Here we have a superclass Shape and its subclasses Circle and Rectangle.
This example demonstrates inheritance, method overriding, and constructor 
chaining.
*/
class Shape {
    color: string;
  
    constructor(color: string) {
      this.color = color;
    }
  
    getInfo() {
      return `This shape is ${this.color}.`;
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(color: string, radius: number) {
      super(color);
      this.radius = radius;
    }
  
    getInfo() {
      return `${super.getInfo()} It's a circle with radius ${this.radius}.`;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    width: number;
    height: number;
  
    constructor(color: string, width: number, height: number) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    getInfo() {
      return `${super.getInfo()} It's a rectangle with dimensions ${this.width}x${this.height}.`;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  // Creating instances of the classes
  const circle = new Circle("Red", 5);
  const rectangle = new Rectangle("Blue", 4, 6);
  
  // Calling methods
  console.log(circle.getInfo());      // Output: This shape is Red. It's a circle with radius 5.
  console.log("Circle Area:", circle.getArea()); // Output: Circle Area: 78.53981633974483
  
  console.log(rectangle.getInfo());   // Output: This shape is Blue. It's a rectangle with dimensions 4x6.
  console.log("Rectangle Area:", rectangle.getArea()); // Output: Rectangle Area: 24
  