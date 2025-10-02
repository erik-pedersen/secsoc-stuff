const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend
app.use(express.static(__dirname));

app.get('/supersecretstuff', (req, res) => {
  res.type('text/plain').send('FLAG{HOW_DID_YOU_FIND_THIS???}');
});

app.listen(PORT, () => {
  console.log(`iXpress listening on http://localhost:${PORT}`);
});
