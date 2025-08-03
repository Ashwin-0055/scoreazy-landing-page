// 🔹 1. Smooth Scroll Reveal
const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// 🔹 2. Hero Typing Animation (TypeIt.js)
new TypeIt("#type-text", {
  strings: ["Confidence Building Microcourse", "For Grades 3–5 Learners!"],
  speed: 60,
  breakLines: false,
  loop: true,
}).go();

// 🔹 3. CTA Button Bounce Animation
const ctaBtn = document.querySelector(".cta-button");
if (ctaBtn) {
  setInterval(() => {
    ctaBtn.classList.toggle("bounce");
  }, 3000);
}

// 🔹 4. Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "↑";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

// 🔹 5. Testimonials Slider (Auto-Rotate)
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function autoSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(autoSlide, 4000);

// 🔹 6. Modal Popup Logic
const modal = document.getElementById("bookingModal");
const openModalBtn = document.querySelector("#enroll .cta-button");
const closeModalBtn = document.querySelector(".modal .close");

if (openModalBtn) {
  openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });
}

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// 🔹 7. Booking Form Submission + Animated Confirmation + Sound
const bookingForm = document.querySelector("#bookingModal form");

bookingForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent real submission

  const name = bookingForm.querySelector("input[type='text']").value.trim();
  const email = bookingForm.querySelector("input[type='email']").value.trim();

  if (!name || !email) {
    alert("Please fill out all fields.");
    return;
  }

  // Play sound
  const audio = document.getElementById("successAudio");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }

  // Show animated toast
  const toast = document.getElementById("successToast");
  toast.querySelector("p").innerText = `🎉 Thank you, ${name}! Your spot has been successfully booked.`;
  toast.classList.add("show");

  // Auto-hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

  // Reset and close modal
  bookingForm.reset();
  modal.style.display = "none";
});

const timerElement = document.getElementById("timer");
const endTime = new Date();
endTime.setDate(endTime.getDate() + 2); // 2 days from now

function updateTimer() {
  const now = new Date().getTime();
  const distance = endTime - now;

  if (distance < 0) {
    timerElement.innerText = "Registration Closed";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  timerElement.innerText = `${days}d ${hours}h ${minutes}m`;
}
setInterval(updateTimer, 1000);
updateTimer();

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
});

