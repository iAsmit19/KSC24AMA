// Variables
const width = 1900;
const height = 400;
let count = 100;
const rowsize = 20;
let dotsize = 6;
const dotmin = 0;
const dotsizebase = 7;

// Calc
const canvases = document.querySelectorAll(".CanvasDots");
canvases.forEach((canvas) => {
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    mouseOver(canvas, ctx);
});

function mouseOver(canvas, ctx) {
    canvas.addEventListener("mousemove", function (event) {
        let PosX, PosY, LocX, LocY, GlobalX, GlobalY;
        PosX = getPositionX(event);
        PosY = getPositionY(event);

        LocX = canvas.getBoundingClientRect().left;
        LocY = canvas.getBoundingClientRect().top;

        GlobalX = PosX - LocX;
        GlobalY = PosY - LocY;

        ctx.clearRect(0, 0, width, height);

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
                counter *= 1.20;
                const nr = String(counter).charAt(2);
                ctx.fillStyle = "#fff";
                ctx.globalAlpha = 0.5;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        ctx.globalAlpha = 1; // Change opacity to 1
    });

    canvas.addEventListener("mouseleave", function () {
        ctx.clearRect(0, 0, width, height); // Clear canvas on mouse leave
    });
}

// Get X position of mouse
function getPositionX(event) {
    return event.clientX;
}

// Get Y position of mouse
function getPositionY(event) {
    return event.clientY;
}