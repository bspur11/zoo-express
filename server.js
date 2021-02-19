const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
//any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
// middleware path for local files

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});



