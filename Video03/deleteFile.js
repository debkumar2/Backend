const fs = require('fs');


fs.unlink('./demo2.html', (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('File deleted successfully');
    }
})
