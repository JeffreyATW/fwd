// var shouldShowAlerts = confirm("Do you want this to work?");

/* var numberOfTimes = 0;

while (numberOfTimes < 3) {
  alert('I\'m glad this worked!');
  alert("This'll work too.");
  alert("I'm \"glad\" this worked.");

  numberOfTimes += 1;
}
*/

// --------------

/* for (var i = 0; i < 3; i += 1) {
  alert('I\'m glad this worked!');
  alert("This'll work too.");
  alert("I'm \"glad\" this worked.");  
} */

shouldShowAlerts = false;

if (shouldShowAlerts) {
  alert("They should never see this...");
}

var favoriteColor = prompt("What's your fave color?");

var jeffreysFavoriteColors = ['blue', 'periwinkle', 'rainbow', 'pink', 'goldenrod'];

if (jeffreysFavoriteColors.indexOf(favoriteColor) > -1) {
  alert("Mine too!");
} else {
  alert("Lame");
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

arr[0] === 1

var arrayOfStrings = ["hello", "world", "my", "name", "etc."];

arrayOfStrings[0] === "hello"

var arrayOfStuff = [1, "hello", true, alert, arr, undefined];

for (var i = 0; i < arrayOfStrings.length; i += 1) {
  if (typeof arrayOfStrings[i] === 'string') {
    console.log(arrayOfStrings[i]);
  }
}

var obj = {
  0: 'my',
  1: 'name',
  2: 'is',
  name: 'Jeffrey',
  age: 30,
  location: 'Berkeley',
  siblings: [
    {
      name: 'Lily',
      age: 26,
      location: 'Brooklyn'
    },
    {
      name: 'Someone else',
      age: '?????',
      location: 'the great beyond....'
    }
  ]
}

obj['name'] === 'Jeffrey'
obj[0] === 'my'

obj['name'] = 'Bob';
arrayOfStuff[arrayOfStuff.length] = obj;
arrayOfStuff.push(obj);

var sayHello = function () {
  console.log('hello!');
}

var giveMeSomethingCreepy = function (message) {
  return message + ', m\'lady';
}

var makeSum = function (addend1, addend2) {
  return addend1 + addend2;
}

var myName = 'Jeffrey';

var screwUpMyName = function () {
  var myName = 'Dumbers';
  console.log(myName);
}



