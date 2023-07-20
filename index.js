const express = require('express');

const app = express();

app.listen(3000, () => console.log('Listening to http://localhost:3000'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    res.send('Server is on!');
});

app.get('/id', (req, res) => {
    console.log('server id');
    res.send('Server id is good!');
});
