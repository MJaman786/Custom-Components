const countDisplay = document.querySelector('.count-display');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

let count = 0;
const hex = '0123456789ABCDEF';
const incrementCount = () => {
    let fontColor = '#';
    count++;
    for (let i = 0; i < 6; i++) {
        fontColor += hex[Math.floor(Math.random() * 16)];
    }
    countDisplay.innerText = count;
    console.log(fontColor);
    countDisplay.style.color = fontColor;
}

let intervalId = null;

start.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(incrementCount, 1000);
    } else {
        return;
    }
})

stop.addEventListener('click', () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    } else {
        return;
    }
})
