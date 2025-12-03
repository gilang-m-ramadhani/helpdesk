const express = require('express');
const bodyParser = require('body-parser');
const keluhanRoutes = require('./routes/keluhanRoutes');
const path = require('path');

const app = express();

// EJS VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

// BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use('/api/keluhan', keluhanRoutes);

// HALAMAN FORM
app.get('/', (req, res) => {
    res.render('form');
});

module.exports = app;

