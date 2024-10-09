//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get width(){
		return this.width;
	}

	get height(){
		return this.height;
	}

	get getArea(){
		return this.width*this.height;
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
		return this.side*this.side;
	}

	getPerimeter(){
		return 4*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
