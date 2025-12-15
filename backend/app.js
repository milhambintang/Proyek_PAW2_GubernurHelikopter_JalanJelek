const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/pegawai', require('./routes/pegawaiRoutes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/klinikpegawai');

app.use('/api/pegawai', require('./routes/pegawaiRoutes'));

module.exports = app;
