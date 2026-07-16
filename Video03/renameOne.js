const fs = require('fs');

fs.rename('./demo.text', './newDemo.text', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Rename Successfully');
    }
})