/**
 * CanvasDrawer class encapsulates the drawing logic for a specified canvas element.
 * It handles pointer events to enable drawing on the canvas.
 */
class CanvasDrawer {
	/**
	 * Creates an instance of CanvasDrawer.
	 * @param {HTMLCanvasElement} canvas - The canvas element to draw on.
	 */
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });

		this.ctx.strokeStyle = "black";
		this.ctx.lineWidth = 10;
		this.ctx.lineJoin = "round";
		this.ctx.lineCap = "round";

		this.drawing = false;
		this.rect = this.canvas.getBoundingClientRect();

		this.canvas.addEventListener(
			"pointerdown",
			this.pointerDownHandler.bind(this),
		);
		this.canvas.addEventListener(
			"pointermove",
			this.pointerMoveHandler.bind(this),
		);
		this.canvas.addEventListener("pointerup", this.pointerUpHandler.bind(this));
	}

	pointerDownHandler(event) {
		this.drawing = true;
		this.ctx.beginPath();
		this.ctx.moveTo(event.offsetX, event.offsetY);
	}

	pointerMoveHandler(event) {
		if (!this.drawing) return;
		this.ctx.lineTo(event.offsetX, event.offsetY);
		this.ctx.stroke();
	}

	pointerUpHandler(event) {
		this.drawing = false;
	}
}

const canvasDrawer1 = new CanvasDrawer(document.getElementById("canvas1"));
const canvasDrawer2 = new CanvasDrawer(document.getElementById("canvas2"));
const canvasDrawer3 = new CanvasDrawer(document.getElementById("canvas3"));
