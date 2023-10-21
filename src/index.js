// This is where we run the server

const {app, PORT, HOST} = require('./server');

app.listen(PORT, () => {
     console.log("Server is running on port: " + PORT);
});

// Added this manually in scripts to be able to run npm dev run
// Added -L to allow for nodemon to work in Windows hardrives - makes no different in macOS
//   "dev": "nodemon -L src/index.js"
// },