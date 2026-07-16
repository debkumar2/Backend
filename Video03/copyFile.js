const fs = require('fs');



fs.copyFile('./demo.html', './demo2.html', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File copied successfully');
    }
})