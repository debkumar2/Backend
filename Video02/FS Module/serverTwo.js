const fs = require('fs')
const http = require('http')
const port = 4000;
fs.readFile('./user.json', (err, data) => {
    try {
        if (err) throw err;
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-type': 'application/json' })
            res.end(data);
        })
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
    catch (err) {
        console.log(err);

    }
})