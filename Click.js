// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal and load the webpage
btn.onclick = function() {
    document.getElementById("webpageFrame").src = "https://www.example.com"; // Change this to the desired URL
    modal.style.display = "block";
}

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
