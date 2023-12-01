
let currentDate = new Date();
const christmas = new Date(currentDate.getFullYear(), 11, 25);

const daysRemaining = document.getElementById("days");
const hoursRemaining = document.getElementById("hours");
const minutesRemaining = document.getElementById("minutes");
const secondsRemaining = document.getElementById("seconds");

setInterval(() => {
  currentDate = new Date();
  let diffTime = Math.abs(christmas - currentDate);
  let days = diffTime / (1000 * 60 * 60 * 24);
  let hours = (days - Math.floor(days)) * 24;
  let minutes = (hours - Math.floor(hours)) * 60;
  let seconds = (minutes - Math.floor(minutes)) * 60;

  daysRemaining.innerHTML = Math.floor(days);
  hoursRemaining.innerHTML = Math.floor(hours);
  minutesRemaining.innerHTML = Math.floor(minutes);
  secondsRemaining.innerHTML = Math.floor(seconds);
  
}, 1000)