const express = require('express');
const bodyParser = require('body-parser'); /*to fetch the data given by the user*/
const libraryrouter = require('./routes/Library');
const userRoutes = require('./routes/User');
const app = express();

/*to fetch the data in human readable form*/
app.use(bodyParser.urlencoded({ extended: false }));

/*EJS template being used*/
app.set('view engine', 'ejs');

/*to fetch all the css and image folders from public folder without writting the whole path*/
app.use(express.static('public'));

/*when ever url will start with /user , we will go to User.js inside routes*/
app.use('/user', userRoutes);

/*when ever url will start with / , we will go to Library.js inside routes*/
app.use(libraryrouter);

/*it will run on localhost:5000*/
app.listen(5000);
