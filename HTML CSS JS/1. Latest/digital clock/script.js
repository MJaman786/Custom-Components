const clockContainer = document.querySelector(".clock-container");
const digitalClock = clockContainer.children[0];
const digitalDate = clockContainer.children[1];

function myDateFunction() {
    const myDate = new Date();
    
    // 1. Get the time in the desired format
    const currentTime = myDate.toLocaleTimeString("en-US", {
        hour: "2-digit",   // 01, 02, ..., 12
        minute: "2-digit", // 00, 01, ..., 59
        second: "2-digit"  // 00, 01, ..., 59
    });

    // 2. Get the date in the desired format: Thursday, October 8, 2025
    const currentDate = myDate.toLocaleDateString("en-US", {
        weekday: "long",   // Thursday
        year: "numeric",   // 2025
        month: "long",     // October
        day: "numeric"     // 8
    });

    digitalClock.innerHTML = currentTime;
    digitalDate.innerHTML = currentDate;
}

setInterval(myDateFunction, 1000);