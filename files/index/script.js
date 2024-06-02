// Add JavaScript for the real-time clock with 12-hour time
function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)
  var timeString = padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds) + " " + meridiem;
  document.getElementById("clock").innerHTML = timeString;
}

function padZero(num) {
  return (num < 10 ? '0' : '') + num;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock
updateClock();
