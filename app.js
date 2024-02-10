// app.mjs
const express = require('express');

const app = express();

app.get('/user', (req, res) => {
  res.send('Hello World!');
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// app.listen(8080, () => "Listening on port 8080");


module.exports = app;
