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

	getArea(){
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(side, width, height){
        super(width, height);
		this.side = side;
        super.width = side;
        super.height = side;

	}

	getPerimeter(){
		return 2*(this.side+this.side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
