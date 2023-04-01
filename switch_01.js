// Declaring variables
let browserName = "Opera";

// check if the name of the browser matches
if (browserName === 'Edge') {
  alert("You've got the Edge!");
} else if (browserName === 'Chrome'
  || browserName === 'Firefox' 
  || browserName === 'Safari' 
  || browserName === 'Opera') {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}