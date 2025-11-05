let count = 0;
let incClicks = 0;
let decClicks = 0;

function inc() {
  count++;
  incClicks++;

  document.getElementById("count").textContent = count;
  document.getElementById("incCount").textContent = incClicks;
}

function dec() {
  count--;
  decClicks++;

  document.getElementById("count").textContent = count;
  document.getElementById("decCount").textContent = decClicks;
}
