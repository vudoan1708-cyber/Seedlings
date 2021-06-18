require('dotenv').config();

const cors = require('cors');

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const fallback = require('express-history-api-fallback');
const compression = require('compression');

// Routing Components
const facebookRouter = require('./routes/facebook');
const loginRouter = require('./routes/login');
const callbackRouter = require('./routes/callback');

const root = path.join(__dirname, './dist');
const port = process.env.PORT || 5000;

const app = express();
const http = require('http');
const server = http.createServer(app);

server.listen(port, () => { console.log(`Starting the server at http://localhost:${port}`); });
app.use(express.json({ limit: '1mb' }));

app.use(cookieParser());
app.use(compression());
app.use(cors());

// Use Routes
facebookRouter(app);
loginRouter(app);
callbackRouter(app);

// check if the app is running in production
if (process.env.NODE_ENV === 'production') {

  // use the static files
  app.use(express.static(root));

// otherwise
} else {

  // serve as an API
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

// fallback
app.use(fallback('index.html', { root }));
