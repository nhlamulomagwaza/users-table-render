require('dotenv').config(); //I'm basically importing the .env file
const express = require('express'); //I'm using the express framework instead of the default http from node
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000; //Will either get the port from the .env file or will use port 3000
const corsOptions = require('./config/corsOptions')
const mimeTypes = require('mime-types');
const routes= require('./routes/routes');
const authenticationMiddleWare= require('./config/authenticateMiddleware');
/* MIDDLEWARES */
app.use(cors(corsOptions)); 
app.use(express.json());

//ROUTES

app.use('/api/users', authenticationMiddleWare, routes);

app.use(express.static(path.join(__dirname, '/client/dist'), {
  setHeaders: (res, path) => {
    const mimeType = mimeTypes.lookup(path);
    console.log(`Path: ${path}, MimeType: ${mimeType}`);
    if (mimeType) {
      res.setHeader('Content-Type', mimeType);
    }
  }
}));




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});