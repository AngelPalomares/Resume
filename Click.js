// Get the modal
var modal = document.getElementById("myModal");

// Get the buttons that open the modal
var buttons = document.querySelectorAll(".openBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks any button, open the modal and load the webpage
buttons.forEach(function(button) {
    button.onclick = function() {
        var url = this.getAttribute("data-url");
        
        // Check if the URL is for GitHub or LinkedIn
        if (url.includes("github.com") || url.includes("linkedin.com")) {
            window.open(url, '_blank'); // Open in a new tab
        } else {
            document.getElementById("webpageFrame").src = url;
            modal.style.display = "block";
        }
    }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById("webpageFrame").src = ""; // Clear the iframe src to stop loading the page
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("webpageFrame").src = ""; // Clear the iframe src to stop loading the page
    }
}
