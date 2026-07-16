const fs = require('fs');
// fs.writeFile('./demo.text', 'Hey Buddy what are you doing', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('File created successfully');
//     }
// })


const input = `<html>
<head></head>
<body>
<div>
    <h1>File Created by writeFile</h1>
</div>
</body>

</html>`
fs.writeFile('./demo.html', input, (err) => {
    if (err) {
        console.log('Something went wrong');
    }
    else {
        console.log('File created successfully');
    }
})