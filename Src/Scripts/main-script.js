let body = document.querySelector("body");
let heroSectionVideo = document.querySelector(".hero-video video");

const heroSection = () => {
  gsap.to(heroSectionVideo, {
    // duration: 1,
    ease: "power2.inOut",
    width: "70%",
    scrollTrigger: {
      trigger: heroSectionVideo,
      scroll: body,
      scrub: 3,
      // markers: true,
      start: "20% 10%",
      end: "70% 80%",
    },
  });
};

const theMain = () => {
  heroSection();
};

const executioner = () => {
  theMain();
};

executioner();
