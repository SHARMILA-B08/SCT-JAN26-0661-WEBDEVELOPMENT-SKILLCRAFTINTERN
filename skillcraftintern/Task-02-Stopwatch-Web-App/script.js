let timer = null;
let seconds = 0;
let running = false;
let lapCount = 1;

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      document.getElementById("display").innerText = formatTime(seconds);
    }, 1000);
  }
}

function pause() {
  running = false;
  clearInterval(timer);
}

function reset() {
  pause();
  seconds = 0;
  lapCount = 1;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (!running) return;
  const li = document.createElement("li");
  li.innerText = `Lap ${lapCount++} — ${formatTime(seconds)}`;
  document.getElementById("laps").appendChild(li);
}
