const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: `i am working` });
});

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
