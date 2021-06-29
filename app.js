// const printProfileDate = profileDataArr => {
//     // This ...
//     for(let i = 0; i < profileDataArr.length; i++){
//         console.log(profileDataArr[i]);
//     }

//     console.log('============');

//     // Is the same as this ...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
    
// };

// printProfileDate(profileDataArgs);

const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// console.log(profileDataArgs);

// const [name, github] = profileDataArgs;
// console.log(name, github);



// fs.writeFile("./index.html", pageHTML, err =>{
//     if(err) throw Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });