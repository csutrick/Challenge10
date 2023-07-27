import inquirer from 'inquirer';

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
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
                userQuestions();
            } else {
                console.log("Making image");
                makeFile(answers);
            }
          });
};

function makeFile(answers) {
    // defaults
    var svgString = "";
    var filename = "generatedLogo";
    // user values
    let user_text = answers.text;
    let user_fontColor = answers["text-color"];
    let user_shapeColor = answers.shape;
    let user_shapeType = answers["pixel-image"];

    //make the shape
    if (user_shapeType === "Sqaure") {
        console.log("Sqaure Selected")
    } else if (user_shapeType === "Circle") {
        console.log("Circle Selected")
    } else if (user_shapeType === "Triangle") {
        console.log("Triangle Selected")
    } 
    // if none are selected error - restarts process
    else {
        console.log("Invalid shape, please try again");
        userQuestions();
    };
};

// runs this function first
userQuestions();