    // app.js
    const express = require('express');
    const app = express();
    const port = 4000;

    // Define a route for the root URL ("/")
    app.get('/', (req, res) => {
      res.send('Welcome to EC2 Environment!');
    });

    // Start the server and listen on the specified port
    app.listen(port, () => {
      console.log(`backend is running at http://localhost:${port}`);
    });