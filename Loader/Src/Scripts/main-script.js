let loaderContainer = document.querySelector(".loader");
let loaderTextTemp = document.querySelector(".loader-housing h1");

const theLoader = () => {
  let timeline = gsap.timeline();
  timeline.to(loaderTextTemp, {
    opacity: 0,
    scale: 1000,
    duration: 2,
    delay: 1.5,
    ease: "power4.inOut",
  });
  timeline.to(loaderContainer, {
    backgroundColor: "none",
  });
  timeline.to(loaderTextTemp, {
    opacity: 0,
    display: "none",
    duration: 0.5,
    delay: -1,
    ease: "power4.inOut",
    mixBlendMode: "darken",
  });
  timeline.to(loaderContainer, {
    opacity: 0,
    display: "none",
    duration: 0.5,
    ease: "power4.inOut",
  });
};

const executioner = () => {
  theLoader();
};

executioner();
