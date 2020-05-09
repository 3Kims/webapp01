/*
// for loops

for (let i = 0; i < 5; i++) {
  // { } are code blocks
  console.log(`in loop : ${i}`);
}
console.log("loop finished");


const names = ["a", "b", "c"];

for (let index = 0; index < names.length; index++) {
  console.log(names[index]);
}


// while loops
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let i = 3;
do {
  console.log(i);
  i++;
} while (i < 5);


// CONDTIONALS

// if statements
let age = 25;
if (age > 20 && typeof age === Number) {
  console.log("age is " + age);
} else if (age > 50) {
  console.log("think about your ages...");
} else {
  console.log("not old enough");
}

let age = 25;
if (age > 20 || typeof age === Number) {
  console.log("age is " + age);
} else if (age > 50) {
  console.log("think about your ages...");
} else {
  console.log("not old enough");
}

// reversing boolean values
let user = !true;

// break and continue in loops.
// continue fnished current cycle/iteration and moves on to the next
// break just breaks out of whoe iteration.


const grade = "D";

switch (grade) {
  case "A":
    console.log("you got an A");
    break;
  case "B":
    console.log("you got an B");
    break;
  case "C":
    console.log("you got an D");
    break;
  default:
    console.log("not a valid case");
    break;
}
*/

// variables and block scope

let age = 30;

if (true) {
  let age = 40;
  let name = "Kim";
  console.log(age, name);
}

console.log(age, name);

// var ignores block scope
// const and let only valid inside function same works on nested.
