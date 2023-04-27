/*Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.*/

let accumulator = new Accumulator(10);
accumulator.read();
accumulator.read();
alert(accumulator.value);

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.newValue = +prompt("Adds a value: ");
    this.value = this.value + this.newValue;
    /* OTHER WAY
  this.read = function() {
    this.value += +prompt('How much to add?', 0);*/

  };
};