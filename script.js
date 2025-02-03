document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.querySelector(".download-btn");
    
    downloadBtn.addEventListener("click", function(event) {
        if (!downloadBtn.getAttribute("href")) {
            event.preventDefault();
            alert("Download link is not available yet. Please check back soon!");
        }
    });
});

