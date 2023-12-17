const express = require('express');
const app = express();
const port = 3000; // or any other port above 1024

app.get('/', (req, res) => {
  res.send('Welcome to Kode2Cloud! We provide DevOps and Cloud freelancing services on upwork.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

