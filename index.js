function age() {
  const dayInputEl = document.getElementById("day-input").value;

  const monthInputEl = document.getElementById("month-input").value;

  const yearInputEl = document.getElementById("year-input").value;

  const currenTime = new Date(); /*get current time info from device*/

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

  let d = currentDate - dayInputEl;
  let m = currentMonth - monthInputEl;
  let y = currentYear - yearInputEl;

  const buttonEl = document.getElementById("image-button");

  buttonEl.addEventListener("click", () => {
    document.getElementById("year-result").innerHTML = y;
    document.getElementById("month-result").innerHTML = m;
    document.getElementById("day-result").innerHTML = d;
  });
}
