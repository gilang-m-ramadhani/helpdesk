import express from "express";
import bodyParser from "body-parser";
import keluhanRoutes from "./routes/keluhan.js";

const express = require('express');
const bodyParser = require('body-parser');
const keluhanRoutes = require('./routes/keluhan');
const path = require('path');

const app = express();

// EJS VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// STATIC FILES (CSS/JS)
app.use(express.static(path.join(__dirname, '../public')));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/keluhan', keluhanRoutes);

// Halaman form
app.get('/', (req, res) => {
    res.render('form');
});

module.exports = app;
