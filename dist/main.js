(() => {
  // src/js/main.js
  function startRandomCounter() {
    const el = document.getElementById("random-counter");
    if (!el)
      return;
    function update() {
      el.textContent = Math.floor(Math.random() * (1600 - 1200 + 1)) + 1200;
    }
    update();
    setInterval(update, 5e3);
  }
  document.addEventListener("DOMContentLoaded", startRandomCounter);
})();
