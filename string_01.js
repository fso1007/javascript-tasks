/*Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";*/


alert( ucFirst("") );

function ucFirst (str) {
  if (!str) return str;

  firstLetter = str.slice(0, 1);
  remainStr = str.slice(1);

  return firstLetter.toUpperCase() + remainStr;
  
  
}