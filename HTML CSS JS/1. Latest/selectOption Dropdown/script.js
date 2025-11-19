const dropdowns = document.querySelectorAll(".dropdown-container");

// Function to handle the accordion-like height transition
function toggleDropdown(container) {
    // Select the necessary elements within the specific container
    const dropdownHead = container.querySelector(".dropdown-field");
    const optionContainer = container.querySelector(".dropdown-options");
    const chevron = container.querySelector(".chevron");

    // Check if the dropdown is currently open (by checking if height is set)
    // We check for '0px' as the closing animation sets the height back to '0'
    const isOpen = optionContainer.style.height && optionContainer.style.height !== '0px';

    if (isOpen) {
        // CLOSE: Set height to 0 to trigger the smooth CSS transition
        optionContainer.style.height = '0';
        
        // Reset styles for the header
        dropdownHead.style.borderBottomLeftRadius = '8px';
        dropdownHead.style.borderBottomRightRadius = '8px';
        chevron.style.transform = 'rotate(0deg)';

        // Re-enable max-height/overflow-y only if you want scrolling *within* the visible area
        // For the accordion effect, we typically keep overflowY hidden until the transition ends, 
        // but given your lists might be long, we re-enable it on close state.
        optionContainer.style.overflowY = 'hidden'; 

    } else {
        // OPEN: Calculate the exact required height using scrollHeight
        // scrollHeight measures the content height regardless of CSS height restrictions
        const scrollHeight = optionContainer.scrollHeight;
        
        // Temporarily set overflow-y to auto for accurate scrollHeight calculation 
        // (though in this case, the height property prevents issues)
        optionContainer.style.overflowY = 'auto'; 
        
        optionContainer.style.height = scrollHeight + 'px';
        

        // Update styles for the header (to visually connect)
        dropdownHead.style.borderBottomLeftRadius = '0';
        dropdownHead.style.borderBottomRightRadius = '0';
        chevron.style.transform = 'rotate(180deg)';
    }
}

// Function to handle option selection
function selectOption(option) {
    const container = option.closest(".dropdown-container");
    // Change to class selector
    const selectedOptionSpan = container.querySelector(".selected-option");
    
    selectedOptionSpan.textContent = option.textContent;
    
    // Close the dropdown after selection
    toggleDropdown(container);
}


// --- Event Listeners Setup ---

dropdowns.forEach(container => {
    const dropdownHead = container.querySelector(".dropdown-field");
    const options = container.querySelectorAll(".dropdown-options li"); // Correctly target list items

    // 1. Click on Dropdown Head to Toggle
    dropdownHead.addEventListener("click", () => {
        toggleDropdown(container);
    });

    // 2. Click on Option to Select and Close
    options.forEach(option => {
        option.addEventListener('click', () => {
            selectOption(option);
        });
    });
});
