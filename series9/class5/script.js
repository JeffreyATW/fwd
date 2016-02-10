var myNumbers = [1, 2, 3, 4, 5];

var myPuppies = ["pizza", "sushi", "burritos"];

var myTruths = [true, false];

var grabBag = [1, "yes", false, 1000000, myTruths];

var iteration = 0;
while (iteration < myPuppies.length) {
  console.log(myPuppies[iteration]);
  iteration += 1;
}

for (var i = 0; i < myPuppies.length; i += 1) {
  console.log(myPuppies[i]);
}

for (i = 0; i < myNumbers.length; i += 1) {
  myNumbers[i] = 1000000;
}

var allAboutMe = {
  age: 30,
  location: "San Francisco",
  name: "Jeffrey",
  siblings: [{
    name: "Lily",
    age: 26,
    location: "New York"
  }, {
    name: "other",
    age: 1000000,
    location: "nowhere"
  }],
  grades: {
    math: 'A+',
    english: 'A+',
    homeEconomics: 'A+'
  }
};

var sayHello = function () {
  alert("Hello!");
}

var exclaimAnything = function (whatever) {
  alert(whatever + "!!!");
}

//exclaimAnything("Hooray");
//exclaimAnything("Goodbye");

var giveMeAnExclamation = function (whatever) {
  return whatever + "!!!";
}

var greeting = giveMeAnExclamation("Hello");

var helloWorld = "Yay! Hooray!";
var sum = function (addend1, addend2) {
  // don't do this:
  //helloWorld = "Hello World!";

  if (typeof addend1 !== "number" || typeof addend2 !== "number") {
    alert("you didn't pass in a sum!");
    return;
  }
  
  return addend1 + addend2;
}

var mySum = sum(1, 2);

alert(helloWorld); // "Yay! Hooray!"

allAboutMe.sum = sum;