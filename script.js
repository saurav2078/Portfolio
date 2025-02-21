document.addEventListener("DOMContentLoaded", () => {
  // Responsive Navigation Menu (Mobile)
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("nav-active");
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Auto-Update Copyright Year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form Submission
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const submitButton = form.querySelector("button");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Client-side validation
    if (!form.checkValidity()) {
      formStatus.innerText = "Please fill out all fields.";
      formStatus.style.color = "red";
      return;
    }

    // Disable the button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = new FormData(form);
  });

  // Back to Top Button
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
