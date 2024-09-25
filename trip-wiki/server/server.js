const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '..')));
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});
app.listen(PORT, () => {
  console.log('start server');
});
