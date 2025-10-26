// I, Smriti Manandhar (Student No: 000922444), certify that this work is my original creation and has not been copied from any other source. //


// ===== FOOTER YEAR UPDATE =====
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
if (footer) {
  footer.innerHTML = `&copy; ${currentYear} Smriti Manandhar`;
}

// ===== BACK TO TOP BUTTON =====
const backToTop = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Smooth scroll to top when clicked
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
