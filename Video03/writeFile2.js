const fs = require('fs');

const input = {
    id: 10,
    name: 'John',
    email: 'deb@gmail.com',
    course: 'CSE',
    skill: ['HTML', 'CSS', 'JS', 'NODE']
}

fs.writeFile('./user.json', JSON.stringify(input), (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File created successfully');
    }
})