// var addend1 = 1000;

// var addend2 = 1000;

var sayHello = confirm("Would you like a hello?");

if (sayHello) {
  alert('Hello world!');
} else {
  console.log('Never mind then!');
}

/* is identical to...

if (confirm("Would you like a hello?")) {
  alert('Hello world!');
} else {
  alert('Never mind then!');
}

*/

var password = prompt("What's the password?");

if (password === "bananas") {
  console.log("Access granted.");
} else {
  alert("403 Forbidden");
}