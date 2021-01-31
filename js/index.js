// JavsScript Section
const btn = document.getElementById("btn");

btn.addEventListener("click", function timeFunction() {
  const time = new Date();
  const newTime = time.toLocaleTimeString();

  const timeHeading = document.getElementById("time");
  timeHeading.innerHTML = newTime;

  btn.innerHTML = "Stop";

  setInterval(timeFunction, 1000);
});
