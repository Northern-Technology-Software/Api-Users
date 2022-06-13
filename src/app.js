const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
require('dotenv').config()

/* inicializacion */
const app = express();

/* middelwares */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('port', process.env.port || 8080);

/* rutas */
app.use('/', require('./routes/auth'));
app.use('/user', require('./routes/users'));

module.exports = app;