// ES5
var text = "welcome edureka";
var text = 1234;
// ES6
// let text1 = 1234;
// let text1 = "hello";

const pie = 3.14;

// ES5 => constructor function
function Circle(rad) {
  this.radius = rad;
}
Circle.prototype.printData = function () {
  console.log(this.radius);
};

var circle = new Circle(20);

// inheritance
function ChildCircle() {}
ChildCircle.prototype = Object.create(Circle.prototype);

// es6
class Circle_1 {
  radius = 10;
  constructor(rad) {
    this.radius = rad;
  }
  printData() {
    console.log(this.radius);
  }
}

class ChildCircle_1 extends Circle_1 {
  constructor(rad) {
    super(rad);
  }
}

var child_2 = new ChildCircle_1(100);
child_2.printData();

// common function
function funOne(var1, var2, callback) {
  // code
  callback();
}

// function expression
let funTwo = function () {};
funTwo();

// callback function
// function definition passed in parameter of other function call
funOne(10, 20, function () {
  // callback / inline function
});
// IIFE => Immediate Invoke Function Expression
(function (var1) {})(100);

// ES6
// arrow function
// # minimized code
// # handel scope of instance

let funTwo_2 = (value) => {
  return value * value;
};

let funTwo_3 = (value) => value * value;

funTwo_3(12);

funOne(10, 20, () => {
  // callback / inline function
});

((var1) => {
  console.log(var1);
})(100);

// destructuring
// spread operators
// async await (promises)
