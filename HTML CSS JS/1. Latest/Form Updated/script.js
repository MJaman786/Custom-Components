/**
 * Minimalistic Form & Dropdown Logic
 * * This script manages the independent functionality of multiple dropdowns, 
 * using the scrollHeight property for a smooth, CSS-transitioned accordion effect.
 */

// 1. Select all dropdown containers in the document
const dropdowns = document.querySelectorAll(".dropdown-container");

// =========================================================================
// Core Dropdown Functions
// =========================================================================

/**
 * Toggles the open/close state of a single dropdown container.
 * It uses the content's measured height (scrollHeight) to enable a smooth CSS transition.
 * * @param {HTMLElement} container - The specific .dropdown-container element to target.
 */
function toggleDropdown(container) {
    // Scope selection to the current container
    const dropdownHead = container.querySelector(".dropdown-head");
    const optionContainer = container.querySelector(".dropdown-option");
    const chevron = container.querySelector(".chevron");

    // Check if the dropdown is currently open (by checking if height is set by JS)
    const isOpen = optionContainer.style.height && optionContainer.style.height !== '0px';

    if (isOpen) {
        // --- CLOSE LOGIC ---
        // Set height to '0' to trigger the smooth CSS transition (0.3s ease-out)
        optionContainer.style.height = '0';
        optionContainer.style.overflowY = 'hidden';

        // Styling cleanup to restore full rounded corners on the head
        dropdownHead.style.borderBottomLeftRadius = '8px';
        dropdownHead.style.borderBottomRightRadius = '8px';
        chevron.style.transform = 'rotate(0deg)';

    } else {
        // --- OPEN LOGIC ---
        // Calculate the exact height required for all content
        // scrollHeight is crucial here: it gives the height needed to view all content.
        const scrollHeight = optionContainer.scrollHeight;

        // Apply the height, which starts the CSS transition instantly
        optionContainer.style.height = scrollHeight + 'px';
        
        // Allow internal scrolling if content is very long
        optionContainer.style.overflowY = 'auto'; 

        // Styling for visual connection (removing bottom head corners)
        dropdownHead.style.borderBottomLeftRadius = '0';
        dropdownHead.style.borderBottomRightRadius = '0';
        chevron.style.transform = 'rotate(180deg)';
    }
}

/**
 * Updates the selected option text and closes the dropdown menu.
 * * @param {HTMLElement} option - The clicked list item (<li>) element.
 */
function selectOption(option) {
    // Find the nearest parent container for context
    const container = option.closest(".dropdown-container");
    const selectedOptionSpan = container.querySelector(".selected-option");
    
    // Update the text in the head
    selectedOptionSpan.textContent = option.textContent;
    
    // Close the dropdown after selection
    toggleDropdown(container);
}


// =========================================================================
// Event Listener Setup (Runs once on load)
// =========================================================================

// Loop through every single dropdown container found
dropdowns.forEach(container => {
    const dropdownHead = container.querySelector(".dropdown-head");
    const options = container.querySelectorAll(".dropdown-option li"); 

    // 1. Click on Dropdown Head to Toggle (Open/Close)
    dropdownHead.addEventListener("click", () => {
        // Pass the unique container element to the toggle function
        toggleDropdown(container);
    });

    // 2. Click on Option to Select and Close
    options.forEach(option => {
        option.addEventListener('click', () => {
            selectOption(option);
        });
    });
});
