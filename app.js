const express = require('express');
const bodyParser = require('body-parser');
const libraryrouter = require('./routes/Library');
const userRoutes = require('./routes/User');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/user', userRoutes);

app.use(libraryrouter);

app.listen(5000);
