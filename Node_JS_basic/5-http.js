const http = require('http');
const fs = require('fs');
const path = require('path');

const countStudents = require('./3-read_file_async');
const databasePath = process.argv[2] || '';
const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    if (!databasePath) {
      res.end('Cannot load the database\n');
    } else {
      try {
        const result = await countStudents(databasePath);
        res.end(result);
      } catch (error) {
        res.end(`${error.message}\n`);
      }
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});
module.exports = app;
