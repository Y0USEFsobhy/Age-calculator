let daysInput = document.getElementById("daysInput");
let monthsInput = document.getElementById("monthsInput");
let yearsInput = document.getElementById("yearsInput");
let daysCountDiv = document.getElementById("days");
let monthCountDiv = document.getElementById("months");
let yearsCountDiv = document.getElementById("years");
let invalidDayMess = document.getElementById("invalidDay");
let invalidMonthMess = document.getElementById("invalidMonth");
let invalidYearMess = document.getElementById("invalidYear");
let button = document.getElementById("button");
let labels = document.querySelectorAll(".error");

let months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

button.addEventListener("click", function (e) {
  let yearsCount = new Date().getFullYear() - yearsInput.value;
  let monthCount = new Date().getMonth() - monthsInput.value;
  let daysCount =
    months[monthsInput.value] - daysInput.value + new Date().getDate();
  if (daysCount > 30) {
    daysCount -= 30;
    monthCount++;
  }
  if (monthCount > 12) {
    monthCount -= 1;
    yearsCount++;
  }
  daysCheck();
  monthCheck();
  yearCheck();

  if (
    daysCheck() === false ||
    monthCheck() === false ||
    yearCheck() === false
  ) {
    yearsInput.style.cssText = "border-color:hsl(0, 100%, 67%);";
    monthsInput.style.cssText = "border-color:hsl(0, 100%, 67%);";
    daysInput.style.cssText = "border-color:hsl(0, 100%, 67%);";
    labels.forEach((t) => {
      t.style.color = "hsl(0, 100%, 67%)";
    });
  }

  if (daysCheck() === true && monthCheck() === true && yearCheck() === true) {
    labels.forEach((t) => {
      t.style.color = "";
    });

    let yearNumber = 0;
    const yearsInterval = setInterval(() => {
      yearsCountDiv.innerText = yearNumber;
      yearNumber++;

      if (yearNumber > yearsCount) {
        clearInterval(yearsInterval);
      }
    }, 50);

    let monthNumber = 0;
    const monthsInterval = setInterval(() => {
      monthCountDiv.innerText = monthNumber;
      monthNumber++;

      if (monthNumber > monthCount) {
        clearInterval(monthsInterval);
      }
    }, 50);

    let daysNumber = 0;
    const daysInterval = setInterval(() => {
      daysCountDiv.innerText = daysNumber;
      daysNumber++;

      if (daysNumber > daysCount) {
        clearInterval(daysInterval);
      }
    }, 50);
  }
});

function daysCheck() {
  if (daysInput.value > 31 || (daysInput.value < 1 && daysInput.value !== "")) {
    invalidDayMess.textContent = "Must be a valid day";
    invalidDayMess.style.opacity = "100";
    daysInput.style.cssText = "border-color:hsl(0, 100%, 67%);";
    return false;
  } else if (daysInput.value === "") {
    invalidDayMess.textContent = "This field is required";
    invalidDayMess.style.opacity = "100";
    return false;
  } else {
    invalidDayMess.style.opacity = "0";
    daysInput.style.cssText = "";
    return true;
  }
}
function monthCheck() {
  if (
    monthsInput.value > 12 ||
    (monthsInput.value < 1 && monthsInput.value !== "")
  ) {
    invalidMonthMess.textContent = "Must be a valid day";
    invalidMonthMess.style.opacity = "100";
    monthsInput.style.cssText = "border-color:hsl(0, 100%, 67%);";
    return false;
  } else if (monthsInput.value === "") {
    invalidMonthMess.textContent = "This field is required";
    invalidMonthMess.style.opacity = "100";
    return false;
  } else {
    invalidMonthMess.style.opacity = "0";
    monthsInput.style.cssText = "";
    return true;
  }
}
function yearCheck() {
  if (
    yearsInput.value > new Date().getFullYear() ||
    (yearsInput.value < 1800 && yearsInput.value !== "")
  ) {
    invalidYearMess.textContent = "Must be a valid day";
    invalidYearMess.style.opacity = "100";
    yearsInput.style.cssText = "border-color:hsl(0, 100%, 67%);";
    return false;
  } else if (yearsInput.value === "") {
    invalidYearMess.textContent = "This field is required";
    invalidYearMess.style.opacity = "100";
    return false;
  } else {
    invalidYearMess.style.opacity = "0";
    yearsInput.style.cssText = "";
    return true;
  }
}
