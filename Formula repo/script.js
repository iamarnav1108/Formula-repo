

document.addEventListener("DOMContentLoaded", () => {
 
    const navLinks = document.querySelectorAll("nav a[href^='#']");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        const name = form.elements["name"].value.trim();
        const phone = form.elements["phone"].value.trim();
        const email = form.elements["email"].value.trim();

        if (!name || !phone || !email) {
            e.preventDefault();
            alert("Please fill out all required fields.");
            return;
        }

        // Optional: Basic phone number check
        if (!/^\d{10}$/.test(phone)) {
            e.preventDefault();
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        
        alert("Thank you for registering! We will get back to you!!");
    });

    const sections = document.querySelectorAll("main section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`nav a[href="#${id}"]`);
            if (entry.isIntersecting && link) {
                navLinks.forEach(a => a.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }, {
        threshold: 0.6
    });

    sections.forEach(section => {
        if (section.id) observer.observe(section);
    });
});
