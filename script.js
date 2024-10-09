//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get width(){
		console.log(this.width);
	}

	get height(){
		console.log(this.height);
	}

	get getArea(){
		console.log(this.width*this.height);
	}
}

class Square extends Rectangle {
	constructor(side){
		super(width,height);
		this.width = side;
		this.height = side;
		this.side = side;
	}

	getArea(){
		console.log(this.side*this.side);
	}

	getPerimeter(){
		console.log(4*this.side);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
