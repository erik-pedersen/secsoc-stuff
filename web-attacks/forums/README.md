# express-idor-demo

Tiny demo that demonstrates Insecure Direct Object Reference (IDOR) patterns.

## What it shows
- `/api/posts/:id` — posts are fetched by ID without authentication. The secret (flag) is stored in post `id=0`.
- `/supersecretstuff` — an unprotected route that returns another flag.
- `public/index.js` — a copy of the server code that a curious user can open in their browser to discover `/givemetheflag`.

## Run locally
1. Save the files above into a folder.
2. `npm install`
3. `npm start`
4. Open `http://localhost:3000` in your browser.

## Try it
- Visit `http://localhost:3000` and click posts.
- Fetch `http://localhost:3000/api/posts/3` to see the post-level flag.
- Open `http://localhost:3000/index.js` to view server source. Notice the `/givemetheflag` route.
- Visit `http://localhost:3000/givemetheflag` to retrieve the route-level flag.
