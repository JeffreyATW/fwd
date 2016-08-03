var shouldShowAlerts = confirm("Do you want this to work?");

if (shouldShowAlerts) {
  alert('I\'m glad this worked!');
  alert("This'll work too.");
  alert("I'm \"glad\" this worked.");
}

shouldShowAlerts = false;

if (shouldShowAlerts) {
  alert("They should never see this...");
}

var favoriteColor = prompt("What's your fave color?");

if (favoriteColor === "blue") {
  alert("Wow how unique");
} else if (favoriteColor === "periwinkle") {
  alert("How exotic!!!");  
} else {
  alert("Mine's blue!");
}
