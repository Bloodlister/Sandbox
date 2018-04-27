const express = require('express');
const app = express();
const Player = require('./Controllers/Player');

app.use('/player', Player);

app.listen(8000);
