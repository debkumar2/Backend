const http = require('http');
const fs = require('fs');
const port = 4200;

const server = http.createServer((req, res) => {

    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Server Error" + " " + err.message);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    })
})
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})