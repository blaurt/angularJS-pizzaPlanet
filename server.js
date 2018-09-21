const express = require('express');
const path = require('path');

const PORT = 3000;

const app = new express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Your app is running!
Visit the link: http://localhost:${PORT}`);
});
