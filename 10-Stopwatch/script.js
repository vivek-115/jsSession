console.log("Hello World");
let sec = document.getElementById("seconds");
let min = document.getElementById("minutes");
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let id = 0;
function startTimer() {
  id = setInterval(function () {
    seconds++;

    if (seconds % 60 == 0) {
      minutes++;
    }
    if (hours % 60 == 0) {
      hours++;
    }

    console.log(seconds);
    sec.innerHTML = seconds;
    console.log(minutes);

    min.innerHTML = minutes;
  }, 1000);
}

let start = document.getElementById("start");
start.addEventListener("click", function () {
  startTimer();
  console.log("Start Event Listener");
});
let pause = document.getElementById("pause");
pause.addEventListener("click", function () {
  console.log("id" + id);
  clearInterval(id);
  console.log("pause Event Listener");
});

let resume = document.getElementById("resume");
resume.addEventListener("click", function () {
  startTimer();
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  seconds = 0;
  minutes = 0;
  hours = 0;
  sec.innerHTML = "Seconds";
  min.innerHTML = "Minutes";

  console.log(" eveent listerner");
});
