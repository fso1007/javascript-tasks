
// Check if the number is greater than 100
while (true) {
  let value = prompt("Enter a number greater than 100");

  if ((value < 100) && value) {
    alert("Enter a number GREATER than 100");
    continue;
  } else if (!value) {
    break;
  }

  alert(`The number is ${value}`);

}

// using do while
/*
do {
  num = prompt("Enter a number greater than 100");
} while (num <= 100 && num);*/