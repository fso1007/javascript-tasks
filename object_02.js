// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let week = {};
alert( isEmpty(week) );
week.day = "Saturday";
alert( isEmpty(week) );

function isEmpty (obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
