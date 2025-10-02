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
      if (rows[0].username != 'TheLegend27') {
        res.send('🎉 Welcome, ' + rows[0].username + '. You are not the admin!');
      } else {
        res.send('🎉 Welcome, TheLegend27' + '. Here is your flag: SCONES{wowzers_th4ts_@_l0t_of_users}');
      }
    } else {
      res.send('❌ Login failed')
    }
  } catch (err) {
    res.status(500).send('💥 SQL Error: ' + err.message);
  }
});

app.listen(3000, () => console.log('💻 Express app on http://localhost:3000'));
