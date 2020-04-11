const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "green"

ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.moveTo(centerX -140, centerY);
ctx.lineTo(centerX - 280, centerY + 160);
ctx.lineTo(centerX, centerY + 160);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.moveTo(centerX + 140, centerY );
ctx.lineTo(centerX + 280, centerY + 160);
ctx.lineTo(centerX, centerY + 160);
ctx.fill();

ctx.moveTo(centerX, centerY - 160);
ctx.lineTo(centerX + 140, centerY);
ctx.lineTo(centerX - 140, centerY);
ctx.fill();

