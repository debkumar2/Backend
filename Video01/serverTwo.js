const http = require('http');
const port = 4000;
const empData = [
    {

        id: 10,
        name: 'Deb',
        age: 26,
        location: 'Kolkata'
    }
    , {

        id: 11,
        name: 'Paku',
        age: 25,
        location: 'Rishra'
    }
    , {

        id: 12,
        name: 'Suraj',
        age: 28,
        location: 'Kolkata'
    }
    , {

        id: 14,
        name: 'Papai',
        age: 25,
        location: 'Howrah'
    }
]

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(empData));
    res.end();
});

server.listen(port, () => {
    console.log(`Server is running is ${port}`);

})
