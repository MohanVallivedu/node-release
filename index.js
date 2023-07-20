const express = require('express');

const app = express();

app.listen(3000, () => console.log('Listening to http://localhost:3000'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    console.log('SUCCESS');
    res.send('Server is on!');
});

app.get('/id', (req, res) => {
    res.send('Server id is good!');
});


app.delete('/id', (req, res) => {
    res.send('Deleted id');
});
