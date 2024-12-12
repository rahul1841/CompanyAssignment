const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/codelists-app', 
  { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
const userRoutes = require('./routes/userRoutes.js');
const listRoutes = require('./routes/listRoutes.js');

app.use('/api/users', userRoutes);
app.use('/api/lists', listRoutes);

app.listen(port, () => 
  console.log(`Server running on port ${port}`));
 
