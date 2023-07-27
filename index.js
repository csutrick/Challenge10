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
              console.log("Success!")
            }
          });
};

// runs this function first
userQuestions();