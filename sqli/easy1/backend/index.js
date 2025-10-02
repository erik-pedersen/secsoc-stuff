const express = require('express');
const pool = require('./db');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile("/app/static/index.html");
});

app.get('/style.css', (req, res) => {
  res.sendFile("/app/static/style.css");
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.query(
      `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`
    );

    if (rows.length > 0) {
      if (rows[0].username != 'admin') {
        res.send('🎉 Welcome, ' + rows[0].username + '. You are not the admin!');
      } else {
        res.send('🎉 Welcome, ' + rows[0].username + '. Here is your flag: SCONES{n0w_i_am_b3come_ADMIN}');
      }
    } else {
      res.send('❌ Login failed')
    }
  } catch (err) {
    res.status(500).send('💥 SQL Error: ' + err.message);
  }
});

app.listen(3000, () => console.log('💻 Express app on http://localhost:3000'));
