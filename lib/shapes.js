// basic shape with color property
class Shape {
    constructor() {
        this.color = '';
    };
    // sets color of shape
    setColor(color) {
        this.color = color;
    };
};
// SVG circle shape
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.color}" />`;
    };
};
// SVG sqaure shape
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    };
};
// SVG triangle shape
class Triangle extends Shape {
    render() {
        return `<polygon points="0,200 300,200 150,0" fill="${this.color}" />`;
    };
};
  
module.exports = { Circle, Square, Triangle };