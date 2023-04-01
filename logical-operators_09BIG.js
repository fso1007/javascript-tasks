// Enter the username
let userName = prompt("Enter the Username");


// Declaring password variable
let message;
let password;

// Check the username and password
if (userName === "Admin") {
  password = prompt("Enter the password");

  if (password === "TheMaster") {
    message = "Welcome!";
  } else if (password === null || password === '') {
    message = "Canceled";
  } else {
    message = "Wrong password.";
  }

} else if (userName === null || userName === '') {
  message = "Canceled";
} else {
  message = "I don't know you.";
}

// Show the result
alert(message);

// DUVIDAS

// Aqui seria melhor utilizar switch e case?