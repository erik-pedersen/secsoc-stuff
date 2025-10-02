# iXpress

Tiny demo that demonstrates Insecure Direct Object Reference (IDOR) patterns.

## What it shows
- `/supersecretstuff` — an unprotected route that returns another flag.
- `app.js` — the server code that a curious user can open in their browser to discover `/supersecretstuff`.

## Run locally
1. Save the files above into a folder.
2. `npm install`
3. `npm start`
4. Open `http://localhost:3000` in your browser.

## Try it
- Visit `http://localhost:3000` and click posts.
- Fetch `http://localhost:3000/posts/0.html` to see the flag file
- Open `http://localhost:3000/index.js` to view server source. Notice the `/supersecretstuff` route.
- Visit `http://localhost:3000/supersecretstuff` to retrieve the route-level flag.
