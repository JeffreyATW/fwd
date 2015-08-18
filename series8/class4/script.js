var addend1 = 5;
var addend2 = 10;

var sum = addend1 + addend2;

console.log(sum);

/*alert("The sum is " + sum);

var isItFifteen = confirm("Is the sum 15???");

sum = prompt("What is the sum?");*/

var age = prompt("How old are you?");

age = parseInt(age);

if (isNaN(age)) {
  alert("You screwed up!");
} else if (age < 200) {
  alert("You're so young!");
} else if (age === 29) {
  alert("That's my age!");
} else {
  alert("Wow!");
} 