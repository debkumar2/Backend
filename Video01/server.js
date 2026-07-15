const http = require('http');
const port = 4000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>Welcome to Node Server</h2>")
    res.write("<p>Thank You Buddy</p>");
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running is ${port}`);

})
