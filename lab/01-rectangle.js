class Rectangle {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}
	calcArea() {
		console.log(this.width * this.height);
		return this;
	}
}

let rect = new Rectangle(4, 5, "red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

let htmlRectangle = document.getElementById("rectangle");

htmlRectangle.style.width = rect.width * 10 + "px";
htmlRectangle.style.height = rect.height * 10 + "px";
htmlRectangle.style.backgroundColor = rect.color;
