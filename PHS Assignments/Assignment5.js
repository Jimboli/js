//Loops assignment

//Problem 1: Write program that prints "Hello" 10 times
console.log("Problem 1")
count = 0;
while(count < 10) {
  console.log("Hello");
  count++;
}

//Problem 2: Write program that prints numbers 10 - 20
console.log("Problem 2");
for(let i = 10; i < 21; i++) {
  console.log(i);
}

//Problem 3: Write loop that prints only even numbers from 0 - 20
console.log("Problem 3");
for(let x = 0; x < 21; x++) {
  console.log(x++)
}

//Problem 4: Write loop that adds all the numberes from 0-50
console.log("Problem 4");
total = 0;
for(let a = 0; a < 50; a++) {
  //Here you could do total += a, but I don't like writing code in that form.
  total = total + a;
}

console.log(total);

//Problem 5: Ask user for 2 inputs, and add all numbers between those 2 numbers
console.log("Problem 5");
let number = prompt("Please enter a number: ")
let number1 = prompt("Please enter another number: ")

let x = 0;
let y = 0;

if(number > number1) {
  y = parseInt(number);
  x = parseInt(number1);
}

else {
  y = parseInt(number1);
  x = parseInt(number);
}

//Boundaries are excluded in this.
let sum = 0;
for(let b = x + 1; b <= y - 1; b++) {
  sum = sum + b;
}

console.log(sum);

//In an online card game, creating sets of cards requires loops