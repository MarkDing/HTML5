window.onload = ondraw;

function ondraw() {
	var context = document.getElementById("test").getContext("2d");
	// draw off-white line, 10px interval each line
	for (var x = 0.5; x < 500; x += 10) {
		context.moveTo(x, 0);
		context.lineTo(x, 375);
	}

	for (var y = 0.5; y < 375; y += 10) {
		context.moveTo(0, y);
		context.lineTo(500, y);
	}

	context.strokeStyle = "#eee";
	context.stroke();

	// draw two horizontal and vertical lines and arrows
	context.beginPath();
	context.moveTo(0, 40);
	context.lineTo(240, 40);
	context.moveTo(260, 40);
	context.lineTo(500, 40);
	context.moveTo(495, 35);
	context.lineTo(500, 40);
	context.lineTo(495, 45);

	context.moveTo(60, 0);
	context.lineTo(60, 153);
	context.moveTo(60, 173);
	context.lineTo(60, 375);
	context.moveTo(65, 370);
	context.lineTo(60, 375);
	context.lineTo(55, 370);

	context.strokeStyle = "#000";
	context.stroke();

	// draw text x, y
	context.font = "bold 12px sans-serif";
	context.fillText("x", 248, 43);
	context.fillText("y", 58, 165);

	// draw coordinator text on upper-left  and bottom-right corner
	context.textBaseline = "top";
	context.fillText("(0, 0)", 8, 5);

	context.textAlign = "right";
	context.textBaseline = "bottom";
	context.fillText("(500, 375)", 492, 370);

	// draw two small black rectangle on upper-left and bottom-right corner.
	context.fillRect(0, 0, 3, 3);
	context.fillRect(497, 372, 3, 3);

	// Draw a gradient rectangle
	var my_gradient = context.createLinearGradient(0, 0, 500, 0);
	my_gradient.addColorStop(0, "black");
	my_gradient.addColorStop(1, "white");
	context.fillStyle = my_gradient;
	context.fillRect(90, 70, 200, 125);

	// Draw a image
	var cat = new Image();
	cat.src = "cat.png";
	cat.onload = function() {
		for (var x = 0, y = 0; x < 500 && y < 375; x += 50, y += 37) {
			context.drawImage(cat, x, y, 88, 56);
		}
	};
}