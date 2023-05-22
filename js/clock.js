function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridiem = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // "0" should be displayed as "12"

  // Add leading zeros to minutes and seconds
  minutes = addLeadingZero(minutes);
  seconds = addLeadingZero(seconds);

  var time = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  document.getElementById("clock").innerHTML = time;
}

function addLeadingZero(number) {
  return number < 10 ? "0" + number : number;
}

setInterval(updateClock, 1000); // Update the clock every second
