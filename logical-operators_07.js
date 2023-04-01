// user input
age = prompt("How old are you?");


// Test if age is NOT between 14 and 90 (AND operator)
if (!(age >= 14 && age <= 90)) {
  alert(`${age} is NOT between 14 and 90`);
} else {
  alert(`${age} is between 14 and 90`);
}

// Test if age is NOT between 14 and 90 (OR operator)
if (age < 14 || age > 90) {
  alert(`${age} is NOT between 14 and 90`);
} else {
  alert(`${age} is between 14 and 90`);
}

// DUVIDAS

// Posso usar template literals sempre que quiser ou tem casos específicos?