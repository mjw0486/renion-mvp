const express = require('express');
const path = require('path');
const db = require('../db');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;
app.listen(port, () => {
	console.log(`Server connected at http://localhost:${port}`);
});
