document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var buttons = document.querySelectorAll(".openBtn");
    var span = document.getElementsByClassName("close")[0];
    var iframe = document.getElementById("webpageFrame");

    // Function to open the modal
    function openModal(url) {
        iframe.src = url;
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
        iframe.src = ""; // Clear the iframe src to stop loading the page
    }

    // When the user clicks any button, open the modal and load the webpage
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var url = this.getAttribute("data-url");
            
            // Check if the URL is for GitHub or LinkedIn
            if (url.includes("github.com") || url.includes("linkedin.com")) {
                window.open(url, '_blank'); // Open in a new tab
            } else {
                openModal(url); // Open the modal with the URL
            }
        });
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        closeModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});
