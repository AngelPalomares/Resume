// Function to update visit count
function updateVisitCount() {
    // Get the current count from local storage
    let visitCount = localStorage.getItem('visitCount');
    if (visitCount) {
        // Increment the count
        visitCount = parseInt(visitCount) + 1;
    } else {
        // If no count exists, start at 1
        visitCount = 1;
    }
    // Save the new count to local storage
    localStorage.setItem('visitCount', visitCount);
    // Update the display
    document.getElementById('visitCount').innerText = visitCount;
}

// Call the function to update visit count on page load
updateVisitCount();
