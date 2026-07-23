const express = require('express');
const text = require('./routes/textroute')

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send(`<h3>Welcome to my express server</h3?`);
})

app.use('/deb1', text);

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
})