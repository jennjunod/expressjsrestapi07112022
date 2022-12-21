const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Beautiful Human!</h1><p>Have you checked out Teach Jenn Tech yet?</p>');
});

app.listen(3334, () => {
  console.log('Server is running on port 3334');
});