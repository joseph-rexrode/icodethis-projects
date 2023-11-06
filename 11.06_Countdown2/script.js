const tripDateInfo = {
  day: 24,
  month: 11,
  year: 2023
}

const tripDate = new Date(tripDateInfo.year, tripDateInfo.month - 1, tripDateInfo.day);
const daySec = document.getElementById("days");
const hourSec = document.getElementById("hours");
const minuteSec = document.getElementById("minutes");
const secondSec = document.getElementById("seconds");

setInterval(() => {
  let date = new Date();
  let diffTime = Math.abs(tripDate - date);
  let diffDaysNotRounded = diffTime / (1000 * 60 * 60 * 24);
  let diffDays = Math.floor(diffDaysNotRounded);
  let diffHoursNotRounded = (diffDaysNotRounded - diffDays) * 24;
  let diffHours = Math.floor(diffHoursNotRounded);
  let diffMinsNotRounded = (diffHoursNotRounded - diffHours) * 60;
  let diffMinutes = Math.floor(diffMinsNotRounded);
  let diffSeconds = Math.floor((diffMinsNotRounded - diffMinutes) * 60);
  
  daySec.innerHTML = diffDays;
  hourSec.innerHTML = diffHours;
  minuteSec.innerHTML = diffMinutes;
  secondSec.innerHTML = diffSeconds;
  
}, 1000)

