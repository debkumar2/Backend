const fs = require('fs');
const { json } = require('stream/consumers');
// fs.readFile('./demo.txt', (err, data) => {
// fs.readFile('./index.html', (err, data) => {
fs.readFile('./user.json', (err, data) => {
    try {
        if (err) throw err;
        // console.log(data.toString());
        console.log(JSON.parse(data));


    }
    catch (err) {
        console.log(err);
    }
})