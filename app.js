const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    res.send('Hello World!');
})

const port = 3000;

const run = () => {
    const date = new Date();
    const mess = `⚡ Server running: ${date.toLocaleDateString()} ${date.toLocaleTimeString()} ⚡` 
    console.log(mess);
};

app.listen(port, run());