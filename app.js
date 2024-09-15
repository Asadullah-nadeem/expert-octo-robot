const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;
const url = process.env.URL || 'http://127.0.0.1';

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
	console.log(`Server listening on port ${url}:${port}`);
});
