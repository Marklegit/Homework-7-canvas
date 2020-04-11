function draw() {
	const canvas = document.getElementById("canvas");
	let ctx = canvas.getContext("2d");
	canvas.style.backgroundColor = "#59d3ff";
	
	if (canvas.getContext) {
		ctx = canvas.getContext("2d");
	} else {
		const para = document.querySelector(".unsupported");
		para.textContent = `Your browser does not support HTML5 Canvas`;
	}
	let centerX = canvas.width / 2;
	let centerY = canvas.height / 2;
	
	ctx.fillStyle = "rgb(255,101,2)";
	
	ctx.fillRect(centerX - 142, centerY - 92, 300, 200);
	ctx.clearRect(centerX - 132, centerY - 84, 280, 180);
	ctx.strokeRect(centerX - 150, centerY - 100, 315, 215);
	
}




draw();