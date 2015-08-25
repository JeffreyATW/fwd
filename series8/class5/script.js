var myFavoriteNumbers = [13, 69, 420, 666];

if (myFavoriteNumbers.length === 4) {
  console.log("My favorite numbers is 4!");
  console.log("Here is a second console log!!!");
  console.log("Here is a third console log!!!");
}

var i = 0;
while (i < myFavoriteNumbers.length) {
  console.log("The value of i is " + i);
  i += 1;
}

for (var i = 0; i < myFavoriteNumbers.length; i += 1) {
  console.log(myFavoriteNumbers[i]);
}

var me = {
  name: "Jeffrey",
  age: 29,
  location: "Berkeley",
  favoriteFoods: [
    "sushi",
    "pizza"
  ],
  siblings: [
    {
      name: "Lily",
      age: 25,
      location: "Brooklyn"
    },
    {
      name: "?????",
      age: NaN,
      location: "your heart"
    }
  ]
};

console.log(me["location"]);

/* don't do this or pay attention to this */
var weirdArray = {
  0: 'test',
  1: 'testAgain'
}

var addend1 = "hooray";
var addend2 = [{look: ["at", "me"]}];

var add = function (addend1, addend2) {
  var something = me.favoriteFoods[0];
  alert("Jeffrey's favorite food is " + something);
  console.log("addend1 living in the global scope is " + window.addend1);
  return addend1 + addend2;
  alert("Jeffrey's sister is named " + me.siblings[0].name);
}

var sum = add(1000, 500);

var yay = function () {
  console.log('hooray!!!');
}

var resultOfYay = yay();

var helloWorld = function (hello, world) {
  return hello + world;
}

console.log(helloWorld("hello"));

var giveMeSomething = function (obj) {
  if (typeof obj === 'object') {
    return obj.something;
  }
}

giveMeSomething();

var changeMyFavoriteNumbers = function () {
  myFavoriteNumbers[0] = 1234567890;
};

changeMyFavoriteNumbers();