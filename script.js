// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a, .back-button").forEach(link => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const section = document.querySelector(targetId);
        
        if (section) {
            event.preventDefault();
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});
