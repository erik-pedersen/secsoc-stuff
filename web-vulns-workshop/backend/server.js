const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 5000;
const SECRET_KEY = 'json-server-auth-123456';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));

const USERS = [
  { username: 'conrad', password: 'aV3ryl0ngPassWord-$#thatNoOnec4nGuess!PALSDS' },
  { username: 'user', password: 'pass123' },
  { username: 'richard', password: 'mypasswordisverysecure' },
  { username: 'alice', password: 'qwertyuiop123' },
  { username: 'bob_the_builder', password: 'CanWeFixItYesWeCan2025!' },
  { username: 'root', password: 'toor' },
  { username: 'admin', password: 'admin' },
  { username: 'susan', password: 'correcthorsebatterystaple' },
  { username: 'kevin', password: 'kevin07!' },
  { username: 'dr_zoidberg', password: 'whyNotZoidberg_42?' },
  { username: 'notabot', password: 'iAmHuman123' },
  { username: 'mrrobot', password: 'fsociety#1' },
  { username: 'testuser', password: 'testpass' },
  { username: 'chris', password: 'mrdirector' },
  { username: 'dini', password: 'mrsdirector' },
  { username: 'el_cato', password: 'mimimi' },
  { username: 'neo', password: 'thereisnospoon!' },
  { username: 'chucknorris', password: 'heDoesn’tUsePasswords' },
  { username: 'eve', password: 'h4ckTh3Pl4n3t' },
  { username: 'banana_hammock', password: 'ripe4summer!' }
];

// Serve login page
app.get('/', (req, res) => {
  const token = req.cookies.token;
  console.log("token = ", token)
  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return res.redirect('/admin');
    } catch (e) {
      // invalid token
      console.log("invalid token")
      res.clearCookie(token);
    }
  }

  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).send('Invalid credentials');
  token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/admin');
});

// Middleware to verify JWT
function authenticate(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send('No token provided');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).send('Invalid token');
  }
}

app.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

// Protected route
app.get('/admin', authenticate, (req, res) => {
  const { username } = req.user;
  let html;
  if (USERS.find(u => u.username === username)) {
    html = `
      <!DOCTYPE html>
      <html>
      <head><title>Dashboard</title></head>
      <body>
        <h1>Welcome, ${username}!</h1>
        ${
          username === 'conrad'
            ? '<p>Your JWT is valid ✅. You are the admin!🗣️🔥💯 </p>'
            : '<p>You are logged in.✅</p>'
        }
      <form method="POST" action="/logout">
        <button type="submit">Logout</button>
      </form>
      </body>
      </html>
    `;
  } else {
    html = `
      <!DOCTYPE html>
      <html>
      <head><title>Dashboard</title></head>
      <body>
        <h1>Invalid username in JWT: ${username}!</h1>
      </body>
      </html>
    `;
    }
  res.send(html);

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

