const fs = require('fs');
fs.appendFile('./demo.text', ' This is Appented text', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Appended successfully');
    }
})