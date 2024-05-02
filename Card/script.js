// Pin the parent container while scrolling
ScrollTrigger.create({
  // trigger: ".container",
  start: "top top",
  end: "bottom bottom",
  pin: true,
  scrub: 3,
});

const cardsHolder = document.querySelector(".cards-holder-housing");
const scrollSpeed = 1.2; // Adjust the scroll speed as needed

// Scroll the cards horizontally based on the scroll speed
ScrollTrigger.create({
  // trigger: ".container",
  start: "top top",
  end: "bottom bottom",
  scrub: 3,
  onUpdate: () => {
    gsap.to(cardsHolder, {
      x: -window.scrollY * scrollSpeed,
      ease: "none",
      overwrite: "auto", // Ensure animations are not overwritten
    });
  },
});

// Make the container draggable
Draggable.create(".cards-holder-housing", {
  type: "x",
  edgeResistance: 0.65,
  bounds: ".cards-holder", // Constrain dragging within itself
  zIndexBoost: false, // Disable zIndex boosting
});
