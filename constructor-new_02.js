/*Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/

let calculator = new Calculator();

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Calculator() {

  this.read = function () {
    this.a = +prompt("Choose a number: ");
    this.b = +prompt("Choose another one: ");
  };

  this.sum = function () {
    return (this.a + this.b);
  };

  this.mul = function () {
    return (this.a * this.b);
  };
}
