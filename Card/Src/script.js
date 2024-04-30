// Variables
const dotContainer = document.querySelector(".dot-container");

// Function to create dots
function createDots() {
  const dotCount = 1000;
  const dotMinSize = 1;
  const dotMaxSize = 5;

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.width = `${
      Math.floor(Math.random() * (dotMaxSize - dotMinSize + 1)) + dotMinSize
    }px`;
    dot.style.height = dot.style.width;
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.opacity = "0";
    dotContainer.appendChild(dot);
  }
}

createDots();

// GSAP animation
gsap.to(".dot", {
  duration: 0.3,
  opacity: 1,
  stagger: 0.2,
  ease: "power4.inOut",
  delay: 0.5,
  filter: "blur(1px)",
});

// Function to handle mouse movement
function handleMouseMovement(event) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    const rect = dot.getBoundingClientRect();
    const scaler = Math.hypot(
      event.clientX - (rect.left + rect.width / 2),
      event.clientY - (rect.top + rect.height / 2)
    );
    gsap.to(dot, {
      duration: 0.3,
      opacity: 1 - scaler / 200,
    });
  });
}

document.addEventListener("mousemove", handleMouseMovement);

// Shooting Star Animation
const shootingStar = document.querySelectorAll(".shooting-star");
let starNumber = () => {
  return Math.floor(Math.random() * 40) + 10;
};
let starStagger = () => {
  return Math.floor(Math.random() * 20) + 1;
};

gsap.to(shootingStar, {
  height: "40px",
  x: 1000,
  y: 1000,
  opacity: 1,
  ease: "power4.inOut",
  duration: 2,
  delay: 1,
  repeat: -1,
  repeatDelay: starNumber(),
  stagger: starStagger(),
});