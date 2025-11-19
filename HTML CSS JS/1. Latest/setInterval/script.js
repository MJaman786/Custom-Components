const controls = document.querySelector(".controls");
const box = document.querySelectorAll(".box");

// Select the first <button> element directly inside the .controls
const startButton = controls.querySelector("button:nth-child(1)");

// - controls.children is an array-like list (0-indexed)
// - you can access the first element directly using brackets [0].
// Access the first child element in the HTMLCollection
const stopButton = controls.children[1];

let count = 0;
let intervalId = null;

function incrementCount() {
  count++;
  box.forEach((value) => {
    value.innerHTML = count;
  });
}

startButton.addEventListener("click", () => {
  if (intervalId === null) {
    intervalId = setInterval(incrementCount, 100);
  }
});

stopButton.addEventListener('click', ()=>{
    clearInterval(intervalId);
    intervalId = null;
})
