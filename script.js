// Typing effect
const words = ["Frontend Developer", "React Coder", "UI/UX Designer"];
let i = 0, j = 0, isDeleting = false;
const typedText = document.querySelector(".typed-text");

function type() {
  let current = words[i];
  typedText.textContent = current.slice(0, j);
  if (!isDeleting) {
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Mobile menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("show");
});

// Contact form fake submit
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! (Demo only)");
});
