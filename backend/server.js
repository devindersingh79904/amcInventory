const express = require('express');
const config = require('dotenv').config({ path: './config/default.env' });
const dbConnection = require('./middleware/db');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: `i am working` });
});

dbConnection();
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
