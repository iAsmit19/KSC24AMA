let loader = document.querySelector(".loader");
let loaderTextPlace1 = document.querySelector(".loader-text-1");
let loaderTextPlace2 = document.querySelector(".loader-text-2");
let loaderTextPlace3 = document.querySelector(".loader-text-3");
let loaderLoadingAnimation = document.querySelector(
  ".loader-loading-animation"
);

const loaderText1Logic = () => {
  let loaderText1 = "Powering Your Journey";
  let loaderText1Split = loaderText1.split("");

  loaderText1Split.forEach((element) => {
    let loaderTextSpan1 = document.createElement("span");
    loaderTextSpan1.innerHTML = element;
    loaderTextSpan1.classList.add("loader-text-1-span");
    loaderTextPlace1.appendChild(loaderTextSpan1);
  });
};

const loaderText2Logic = () => {
  let loaderText2 = "Every Ride";
  let loaderText2Split = loaderText2.split("");

  loaderText2Split.forEach((element) => {
    let loaderTextSpan2 = document.createElement("span");
    loaderTextSpan2.innerHTML = element;
    loaderTextSpan2.classList.add("loader-text-2-span");
    loaderTextPlace2.appendChild(loaderTextSpan2);
  });
};

const loaderText3Logic = () => {
  let loaderText3 = "Every Adventure";
  let loaderText3Split = loaderText3.split("");

  loaderText3Split.forEach((element) => {
    let loaderTextSpan3 = document.createElement("span");
    loaderTextSpan3.innerHTML = element;
    loaderTextSpan3.classList.add("loader-text-3-span");
    loaderTextPlace3.appendChild(loaderTextSpan3);
  });
};

const loaderLogic = () => {
  loaderText1Logic();
  loaderText2Logic();
  loaderText3Logic();
};

const loaderAnimation = () => {
  let loaderSpans1 = Array.from(
    document.querySelectorAll(".loader-text-1-span")
  );
  let loaderSpans2 = Array.from(
    document.querySelectorAll(".loader-text-2-span")
  );
  let loaderSpans3 = Array.from(
    document.querySelectorAll(".loader-text-3-span")
  );

  loaderSpans1.sort(() => Math.random() - 0.5);
  loaderSpans2.sort(() => Math.random() - 0.5);
  loaderSpans3.sort(() => Math.random() - 0.5);

  let timeline = gsap.timeline({ delay: 0.1 });
  gsap.to(loaderLoadingAnimation, {
    opacity: 1,
    duration: 1,
    delay: 0.5,
  });
  timeline.to(loaderSpans1, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: 0.1,
  });

  timeline.to(loaderSpans1, {
    opacity: 0,
    filter: "blur(0px)",
    stagger: 0.1,
  });

  timeline.to(loaderSpans2, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: 0.1,
  });
  timeline.to(loaderSpans2, {
    opacity: 0,
    filter: "blur(0px)",
    stagger: 0.1,
  });

  timeline.to(loaderSpans3, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: 0.1,
  });
  timeline.to(loaderSpans3, {
    opacity: 0,
    filter: "blur(0px)",
    stagger: 0.1,
  });
  // timeline.to(loaderLoadingAnimation, {
  //   opacity: 0,
  //   duration: 1,
  //   ease: "power4.easeOut",
  // });
  timeline.to(loader, {
    opacity: 0,
    display: "none",
    duration: 1,
    ease: "power4.easeOut",
  });
};

const theLoader = () => {
  loaderLogic();
  loaderAnimation();
};

const theExecutioner = () => {
  theLoader();
};

theExecutioner();
