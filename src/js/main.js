// Счетчик с рандомным числом
function startRandomCounter() {
  const el = document.getElementById("random-counter");
  if (!el) return;
  function update() {
    el.textContent = Math.floor(Math.random() * (1600 - 1200 + 1)) + 1200;
  }
  update();
  setInterval(update, 5000);
}

document.addEventListener("DOMContentLoaded", startRandomCounter);
