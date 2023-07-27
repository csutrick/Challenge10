import inquirer from 'inquirer';

// makes svg
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    };
};

var svgString = "";

// prompts user questions and stores "answers"
function userQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "TEXT: Enter up to (3) Characters:",
            },
            {
                type: "input",
                name: "text-color",
                message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
            },
            {
                type: "input",
                name: "shape",
                message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
            },
            {
                type: "list",
                name: "pixel-image",
                message: "Choose which Pixel Image you would like?",
                choices: ["Circle", "Square", "Triangle"],
            }
        ])
        // checks to see if user only entered 3 character for text
        .then((answers) => {
            // if user didnt
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
                userQuestions();
            // user entered 3 or less
            } else {
                console.log("Making image");
                makeShape(answers);
            }
          });
};

// gets properties from user prompts and builds shape
function makeShape(answers) {
    // defaults
    var filename = "generatedLogo";
    let user_shape;
    var svg = new Svg();
    // user values
    let user_text = answers.text;
    let user_fontColor = answers["text-color"];
    let user_shapeColor = answers.shape;
    let user_shapeType = answers["pixel-image"];

    //make the shape
    if (user_shapeType === "Square") {
        console.log("Sqaure Selected");
        user_shape = new Square();
    } else if (user_shapeType === "Circle") {
        console.log("Circle Selected");
        user_shape = new Circle();
    } else if (user_shapeType === "Triangle") {
        console.log("Triangle Selected");
        user_shape = new Triangle();
    } 
    // if none are selected error - restarts process
    else {
        console.log("Invalid shape, please try again");
        userQuestions();
    };
    // sets color of the shape
    user_shape.setColor(user_shapeColor);
    // sets the text and color 
    svg.setTextElement(user_text, user_fontColor);
    // sets the shape
	svg.setShapeElement(user_shape);
	svgString = svg.render();
    FileWrite();
};

function FileWrite() {
    console.log("writing file");
    console.log("Displaying shape:\n\n" + svgString);
}


// runs this function first
userQuestions();


// shape class
// makes the shape
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