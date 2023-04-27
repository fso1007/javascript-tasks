/*Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.*/

let calculator = {
  read () {
    this.a = +prompt("Choose a number:"); // this.a = calculator.a
    this.b = +prompt("Choose another one: "); // +prompt string to number
  },

  sum () {
    return (this.a + this.b);
  },

  mul() {
    return (this.a * this.b);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); 