const express = require('express');
const app = express();

const Common = require('./Controllers/Common');
const Player = require('./Controllers/Player');
const Battle = require('./Controllers/Battle');

app.use('/', Common);
app.use('/player', Player);
app.use('/battle', Battle);

app.listen(8000);
