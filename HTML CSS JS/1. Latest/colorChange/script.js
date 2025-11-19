const controlPanel = document.querySelector("#controlPanel");

const body = controlPanel.parentElement;

const buttons = body.querySelectorAll("button");
const startBtn = buttons[0];
const stopBtn = buttons[1];

const colorDisplay = controlPanel.querySelector("#colorDisplay");
const p = colorDisplay.querySelector("p");
const h2 = colorDisplay.querySelector("h2");
/**
 * A curated list of beautiful, rich colors suitable for use in a minimalist dark theme.
 * The original dark gray example color is included for context.
 */
const colors = [
  { name: "Dark Abyss", color: "#242424" },
  { name: "Deep Indigo", color: "#1A237E" },
  { name: "Crimson Velvet", color: "#B71C1C" },
  { name: "Royal Plum", color: "#673AB7" },
  { name: "Burnt Sienna", color: "#111827" },
  { name: "Dark Emerald", color: "#1B5E20" },
  { name: "Slate Smoke", color: "#455A64" },
];

let count = 0;
let intervalId = null;

let changeColor = () => {
  if (count === colors.length) {
    count = 0;
    changeColor();
  }
  body.style.backgroundColor = colors[count].color;
  p.innerText = `Current Theme Color : ${colors[count].name}`;
  h2.innerText = `${colors[count].color}`;
  count++;
};

startBtn.addEventListener("click", () => {
  if (intervalId !== null) {
    return; // exits when interval is running
  } else {
    // if interval is null
    intervalId = setInterval(changeColor, 2000);
  }
});

stopBtn.addEventListener("click", () => {
  if (intervalId) { // it runs when interval id is not null
    console.log(colorDisplay);
    clearInterval(intervalId);
    intervalId = null;
  }else{
    return;
  }
});
