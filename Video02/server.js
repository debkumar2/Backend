const http = require('http');
const port = 4100;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h3>Hey Buddy how are you</h3>")
    res.write("<h4>all good</h4>")
    res.write("<p>Thank You Buddy</p>")
    res.end();

})

server.listen(port, () => {
    console.log(`Server is running in the port ${port}`)
})