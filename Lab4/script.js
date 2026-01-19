/* Scroll Spy */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY;
    if (top >= sec.offsetTop - 150) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* Reveal on scroll */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
reveals.forEach(r => observer.observe(r));

/* Slider */
let index = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);

/* Dark mode */
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

// Load theme đã lưu
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleTheme.textContent = "☀️";
} else {
  toggleTheme.textContent = "🌙";
}

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleTheme.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleTheme.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

const cursor = document.querySelector(".cursor");
const size = 20; // kích thước cursor

document.addEventListener("mousemove", e => {
  const x = Math.min(
    window.innerWidth - size / 2,
    Math.max(size / 2, e.clientX)
  );

  const y = Math.min(
    window.innerHeight - size / 2,
    Math.max(size / 2, e.clientY)
  );

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});
