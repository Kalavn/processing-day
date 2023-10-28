"use strict";
const arrivalEl = document.getElementById("arrival");
const todayEl = document.getElementById("today");
const submitEl = document.getElementById("submit");
const processingEl = document.getElementById("processing");

// const todayTime = new Date();
// const todayDate = todayTime.getDay();

// const arrivalTime = new Date(2023, 9, 31);
// const arrivalDate = arrivalTime.getDay();

// console.log(days);
let arrSelect = [];
processingEl.innerHTML = "<option>select</option>";
submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  const arrivalTime = new Date(arrivalEl.value);
  const arrivalDate = arrivalTime.getDay();
  const todayTime = new Date(todayEl.value);
  const todayDate = todayTime.getDay();

  const calcDays = (date1, date2) => {
    return Math.abs(Math.floor((date2 - date1) / (1000 * 60 * 60 * 24)));
  };

  let days = calcDays(arrivalTime, todayTime);

  // console.log(todayDate, arrivalDate);
  const todayArrival =
    (todayDate === 6 || todayDate === 0) &&
    (arrivalDate === 6 || arrivalDate === 0);

  console.log(todayArrival, days);

  if (todayDate === 6) days -= 2;
  else if (todayDate === 0) days -= 1;
  if (arrivalDate === 6) days -= 1;
  else if (arrivalDate === 0) days -= 2;
  if (days <= 0) days = 0;
  if (days <= 6 && todayArrival) days = 0;
  if (days >= 4) days = 4;
  console.log(days);

  const arrProcessing = [
    "Emergency 2 hours | 278 USD",
    "SUPPER URGENT 1 days | 149 USD",
    "URGENT 2 days | 109 USD",
    "Normal 4 days | 79 USD",
  ];

  switch (days) {
    case 0:
      arrSelect = [arrProcessing[0]];
      break;
    case 1:
      arrSelect = [arrProcessing[0], arrProcessing[1]];
      break;
    case 2:
    case 3:
      arrSelect = [arrProcessing[0], arrProcessing[1], arrProcessing[2]];
      break;
    case 4:
      arrSelect = arrProcessing;
      break;
    default:
  }
  let html = "";
  arrSelect.forEach(function (value) {
    html += `<option>${value}</option>`;
  });
  console.log(html);
  processingEl.innerHTML = html;
});
