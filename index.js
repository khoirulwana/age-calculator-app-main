/* Input Elements */
let isValid = false;
let dayInputEl = document.getElementById("day-input");
let monthInputEl = document.getElementById("month-input");
let yearInputEl = document.getElementById("year-input");

/* Output Elements */
const yearResultEl = document.getElementById("year-result");
const monthResultEl = document.getElementById("month-result");
const dayResultEl = document.getElementById("day-result");
const buttonEl = document.getElementById("image-button");

/* Error Messages */
const errorMessage = document.getElementById("error-message");
const errorMessageDate = document.getElementById("error-message1");
const errorMessageMonth = document.getElementById("error-message2");
const errorMessageYear = document.getElementById("error-message3");

buttonEl.addEventListener("click", CalculateDate);

function handleInputValidation(e) {
  const dayValue = +dayInputEl.value;
  const monthValue = +monthInputEl.value;
  const yearValue = +yearInputEl.value;

  isValid = true;

  if (dayValue <= 0 || dayValue > 31) {
    errorMessageDate.classList.add("active");
    isValid = false;
  } else {
    errorMessageDate.classList.remove("active");
  }

  if (monthValue <= 0 || monthValue > 12) {
    errorMessageMonth.classList.add("active");
    isValid = false;
  } else {
    errorMessageMonth.classList.remove("active");
  }

  if (yearValue <= 0 || yearValue > new Date().getFullYear()) {
    errorMessageYear.classList.add("active");
    isValid = false;
  } else {
    errorMessageYear.classList.remove("active");
  }

  if (!isValid) {
    errorMessage.classList.add("active");
  } else {
    errorMessage.classList.remove("active");
  }
}

function CalculateDate() {
  if (isValid) {
    let birthday = `${monthInputEl.value}/${dayInputEl.value}/${yearInputEl.value}`;
    /*console.log(birthday);*/
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate();

    // DISPLAYING EVERYTHING
    dayResultEl.textContent = ageDay;
    monthResultEl.textContent = ageMonth;
    yearResultEl.textContent = ageYears;
  } else {
    alert("error");
  }
}

dayInputEl.addEventListener("input", handleInputValidation);
monthInputEl.addEventListener("input", handleInputValidation);
yearInputEl.addEventListener("input", handleInputValidation);

/*
function age() {
  const currenTime = new Date(); /*get current time info from device*/
/*
  let currentDate = currenTime.getDate();
  let currentMonth = 1 + currenTime.getMonth();
  let currentYear = currenTime.getFullYear();

  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dayInputEl > currentDate) {
    currentDate = currentDate + month(currentMonth - 1);
    currentMonth = currentMonth - 1;
  }

  if (monthInputEl > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  if (yearInputEl > currentYear) {
  }

  let d = currentDate - dayInputEl;
  let m = currentMonth - monthInputEl;
  let y = currentYear - yearInputEl;

  document.getElementById("year-result").innerHTML = y;
  document.getElementById("month-result").innerHTML = m;
  document.getElementById("day-result").innerHTML = d;
}

*/
