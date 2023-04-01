// user input
let login = prompt("Whats your job?");

// using ternary operator
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

// Show the output
alert(message);