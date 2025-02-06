document.addEventListener("DOMContentLoaded", function() {
    const downloadBtns = document.querySelectorAll(".download-btn, .download-btn2");
    
    downloadBtns.forEach(btn => {
        btn.addEventListener("click", function(event) {
            if (!btn.getAttribute("href")) {
                event.preventDefault();
                alert("Download link is not available yet. Please check back soon!");
            }
        });
    });
});
