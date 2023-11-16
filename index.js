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
  const dayValue = +dayInputEl.value.trim();
  const monthValue = +monthInputEl.value.trim();
  const yearValue = +yearInputEl.value.trim();

  isValid = true;

  if (dayValue <= 0 || dayValue > 31 || isNaN(dayValue)) {
    errorMessageDate.classList.add("active");
    isValid = false;
  } else {
    errorMessageDate.classList.remove("active");
  }

  if (monthValue <= 0 || monthValue > 12 || isNaN(monthValue)) {
    errorMessageMonth.classList.add("active");
    isValid = false;
  } else {
    errorMessageMonth.classList.remove("active");
  }

  if (
    yearValue <= 0 ||
    yearValue > new Date().getFullYear() ||
    isNaN(yearValue)
  ) {
    errorMessageYear.classList.add("active");
    isValid = false;
  } else {
    errorMessageYear.classList.remove("active");
  }

  if (dayValue === "" || monthValue === "" || yearValue === "") {
    errorMessage.classList.add("active");
    isValid = false;
  } else {
    errorMessage.classList.remove("active");
  }
}

function CalculateDate() {
  if (isValid) {
    let birthday = `${monthInputEl.value}/${dayInputEl.value}/${yearInputEl.value}`;
    console.log(birthday);
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
