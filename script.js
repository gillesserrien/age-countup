// const bigNumberElement = document.getElementById("big-number");
// const smallNumberElement = document.getElementById("small-number");

// function calculateAge() {
//   // Convert the birthdate string to a Date object
//   const birthdateDate = new Date("2004-09-30T01:46:00.000Z");

//   // Get the current date
//   const currentDate = new Date();

//   // Calculate the age
//   const age = currentDate.getFullYear() - birthdateDate.getFullYear();

//   // Check if the birthday has already occurred this year
//   if (
//     currentDate.getMonth() < birthdateDate.getMonth() ||
//     (currentDate.getMonth() === birthdateDate.getMonth() &&
//       currentDate.getDate() < birthdateDate.getDate())
//   ) {
//     // Subtract 1 from the age if the birthday hasn't occurred yet this year
//     age - 1;
//   }

// }

// function remainingTime() {
//   //   const msInYear = 31536000000;
//   //   const currentDate = new Date();
//   //   const birthdateDate = updateBirthdateDate();
//   //   const timeDifference = birthdateDate - currentDate;
//   //   const timeDifferenceUp = 31556926000 - timeDifference;

//   const currentDate = new Date();
//   const birthdateDate = updateBirthdateDate();
//   const timeDifference = birthdateDate - currentDate;

//   const timeDifferenceUp = 1 - (timeDifference / 31556900000);

//   var timeAsString = timeDifferenceUp.toString();
//   if (timeAsString.startsWith("0.")) {
//     timeAsString = timeAsString.substring(1);
//   }
//   var numberAsFloat = parseFloat(timeAsString);
//   if (numberAsFloat<=0) {
//   }
//   console.log(numberAsFloat);

//   smallNumberElement.textContent = timeAsString;
// }

// function updateBirthdateDate() {
//   const currentDate = new Date();
//   const birthdateDate = new Date("2023-06-29");

//   // Check if today's date is greater than or equal to the birthdateDate
//   if (currentDate >= birthdateDate) {
//     // If true, increment the year by 1
//     birthdateDate.setFullYear(birthdateDate.getFullYear() + 1);
//   }
//   bigNumberElement.innerText = birthdateDate.getFullYear() - 2004;

//   return birthdateDate;
// }

// // setInterval(function () {
// //   remainingTime();
// // }, 125);
const finalNumber = document.getElementById("finalnumber");
const bigNumberElement = document.getElementById("big-number");
const smallNumberElement = document.getElementById("small-number");
const userAgeInput = document.getElementById("input-age");
const button = document.getElementsByTagName("button")[0];
const divInput = document.getElementsByClassName("container-age-select")[0];
const normalDiv = document.getElementsByClassName("container")[0];
let birthday;
let currentDate = new Date();

button.addEventListener("click", function () {
  birthday = new Date(userAgeInput.value);

  if (isNaN(birthday.getTime()) || birthday>currentDate) {
    userAgeInput.style.color = "red";
  } 
  else 
  {
    divInput.style.display = "none";
    calculateAge();
    normalDiv.style.display = "visible";
  }
});

function calculateAge() {

  let timeDifference = (currentDate - birthday) / 31556900000;

  // Convert the decimal part to a string with 8 decimal places
  let decimalPartString = (timeDifference - Math.floor(timeDifference))
    .toFixed(12)
    .toString();

  // Remove the leading "0" before the comma if present
  if (decimalPartString.startsWith("0.")) {
    decimalPartString = decimalPartString.substring(1);
  }

  bigNumberElement.innerText = Math.floor(timeDifference);
  smallNumberElement.innerText = decimalPartString;
}
setInterval(function () {
  calculateAge();
}, 150);
