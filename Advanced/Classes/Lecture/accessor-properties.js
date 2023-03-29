class Circle {
    constructor(r) {
        this.r = r;
    }
    get area() {
        return this.r**2*Math.PI;
    }

}

let circke = new Circle(2);