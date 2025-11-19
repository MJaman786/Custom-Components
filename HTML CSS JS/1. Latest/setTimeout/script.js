const timeoutContainer = document.querySelector(".timeout-container");

// Select the button and status area reliably (assuming structure)
const button = timeoutContainer.children[3];
const statusArea = timeoutContainer.children[4];
const p = statusArea.querySelector("p");

let count = 3;
let intervalId = null;

// Initial slide-in (after 2 seconds)
setTimeout(() => {
    timeoutContainer.classList.add("slide-in");
}, 2000);


let timeCount = () => {
    // 1. Check if we are done (or about to start the last step)
    if (count < 0) {
        clearInterval(intervalId);
        intervalId = null;
        return; // Stop execution here
    }
    
    // 2. Perform the update
    p.innerHTML = `Form will disapper in ${count}s`;

    if (count === 0) {
        // Run the final actions when '0s' is displayed
        clearInterval(intervalId);
        intervalId = null;
        timeoutContainer.classList.remove("slide-in");

        // Schedule the message reset for after the transition
        setTimeout(() => {
            p.innerHTML = "Scheduled messages will appear here...";
            count = 3; // Reset the counter for the next button click
        }, 1000);
        
    }
    
    // 3. Decrement the counter for the next iteration
    count--;
};

button.addEventListener("click", () => {
    if (intervalId === null) {
        // Run timeCount immediately to show the initial '3s'
        timeCount(); 
        
        // Start the interval for the remaining updates (2s, 1s, 0s)
        intervalId = setInterval(timeCount, 1000);
    }
});