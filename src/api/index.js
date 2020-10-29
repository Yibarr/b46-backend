const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { logDate } = require('../middlewares/index.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(logDate);
app.use(morgan('dev'));
app.use(express.json({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.use('/api/v1', require('../routers/index.js'));

module.exports = {
  app,
  PORT,
};
