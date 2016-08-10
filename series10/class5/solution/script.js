/* Accepts a first and last name, and returns the combination of the two. */
var createName = function(first, last) {
	return first + " " + last;
}

/* Prompts for a first and last name, then uses the result of createName to
alert you of your full name. */
var askName = function () {
  /* Uncomment the next 3 commented lines (and remove the unnecessary var
  command from where we assign a value to fullName) to keep asking this until
  the proper name is entered. */
  // var fullName;
  // while (fullName !== "Bob Jones") {
	var first = prompt("What's your first name?");
	var last = prompt("What's your last name?");
	var fullName = createName(first, last);
	alert("Your name is " + fullName + "!");
  // }
}

/* Call askName when the page loads. */
askName();

/* Uncomment this to cause askName to run every time the "asker" element is
clicked. */
// var asker = document.getElementById("asker");
// asker.onclick = askName;