const express = require('express');
const app = express();
const Player = require('./Controllers/Player');
const Battle = require('./Controllers/Battle');

app.use('/player', Player);
app.use('/battle', Battle);

app.listen(8000);
