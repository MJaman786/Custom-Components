const colorChangerContainer = document.querySelector(
  ".color-changer-container"
);
const body = colorChangerContainer.parentElement;
const currentColor = colorChangerContainer.querySelector("#current-color");
const buttonGroup = colorChangerContainer.querySelector(".button-group");
const startButton = buttonGroup.children[0];
const stopButton = buttonGroup.children[1];

const hexValues = "0123456789ABCDEF";

function randomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId = null;

startButton.addEventListener("click", () => {
  if (intervalId) return;
  intervalId = setInterval(() => {
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    currentColor.innerHTML = newColor;
    console.log(newColor);
  }, 1000);
});

stopButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    return;
  }
});
