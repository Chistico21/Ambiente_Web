const express = require('express');
const path    = require('path');

const app     = express();
const PORT    = 3000;

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>
    {
        console.log('Loading Home...');
        res.send('Hello world');
    })

app.listen(PORT, () =>
    {
        console.log('😊 Servidor en el puerto: ' + PORT);""
    });


