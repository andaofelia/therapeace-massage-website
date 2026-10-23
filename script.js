const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent =
            "Please complete all fields before sending your enquiry.";
    } else {
        formMessage.textContent =
            "Thank you! Your enquiry has been completed successfully.";

        contactForm.reset();
    }
});
