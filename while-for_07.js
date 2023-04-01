// check prime numbers until 10
let n = 10;

// check if a number is prime
nextPrime : 
for (let i = 2; i <= n; i++) { // for each i
  for (let j = 2; j < i; j++) { // look for a divisor
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert(i); // found a prime
}