// Variables
const width = 1000;
const height = 500;
let count = 19;
const rowsize = 25;
let dotsize = 6;
const dotmin = 3;
const dotsizebase = 6;

// Calc
const canvases = document.querySelectorAll(".CanvasDots");
canvases.forEach((canvas) => {
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = width;
  ctx.canvas.height = height;
  mouseOver(canvas, ctx, false);
  canvas.addEventListener("mousemove", function (event) {
    mouseOver(canvas, ctx, event, true);
  });
  canvas.addEventListener("mouseleave", function () {
    mouseOver(canvas, ctx, null, false);
  });
});

function mouseOver(canvas, ctx, event, cursor) {
  let PosX, PosY, LocX, LocY, GlobalX, GlobalY;
  if (cursor && event) {
    PosX = getPositionX(event);
    PosY = getPositionY(event);
  } else {
    PosX = -100;
    PosY = -100;
  }

  LocX = canvas.getBoundingClientRect().left;
  LocY = canvas.getBoundingClientRect().top;

  GlobalX = PosX - LocX;
  GlobalY = PosY - LocY;

  ctx.canvas.width = width;
  ctx.canvas.height = height;

  // The counter is used to calculate the color (fake random) if u want to have multiple canvas grids with a different color order just increase or decrease the value
  let counter = 5.56;
  for (let ix = 4; ix <= count - 3; ix++) {
    for (let iy = 4; iy <= count - 3; iy++) {
      ctx.beginPath();
      const scaler = Math.hypot(GlobalX / rowsize - ix, GlobalY / rowsize - iy);
      dotsize = dotsizebase - scaler * 1.05;
      if (dotsize < dotmin) {
        dotsize = dotmin;
      }
      ctx.arc(rowsize * ix, rowsize * iy, dotsize, 0, 2 * Math.PI);
      counter *= 1.18;
      const nr = String(counter).charAt(2);
      if (nr <= 3) {
        ctx.strokeStyle = "#f05c2c";
      } else if (nr <= 6) {
        ctx.strokeStyle = "#1daeea";
      } else {
        ctx.strokeStyle = "#FFFFFF";
      }

      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
}

// Get X position of mouse
function getPositionX(event) {
  return event.clientX;
}

// Get Y position of mouse
function getPositionY(event) {
  return event.clientY;
}
