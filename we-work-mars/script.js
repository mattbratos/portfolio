document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("a[href^='#']"); // Select all anchor tags with href starting with '#'

    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});


