const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
 const server = express();
 // Handle all requests via Next.js
 server.get('*', (req, res) => {
 return handle(req, res);
 });
 server.listen(8445, (err) => {
 if (err) throw err;
 console.log('> Ready on Port 8445');
 });
});
