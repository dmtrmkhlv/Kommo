const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
let newTimer = undefined;

const createTimerAnimator = (seconds) => {
  if (newTimer) {
    clearInterval(newTimer);
  }
  newTimer = setInterval(() => {
    let h = Math.floor(seconds / 60 / 60);
    let m = Math.floor((seconds - h * 60 * 60) / 60);
    let s = seconds - (h * 60 * 60 + m * 60);
    timerEl.innerHTML = `
    ${h < 10 ? "0" + h : h}:${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
    if (seconds == 0) {
      clearInterval(newTimer);
    }
    seconds--;
  }, 1000);
};

const animateTimer = createTimerAnimator;

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9,\s]/g, "").trim();
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = "";
});
