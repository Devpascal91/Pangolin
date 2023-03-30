const express = require('express');
const mongoose= require('mongoose');
const User = require('./models/User');
const userRoutes = require('./routes/user');
const bodyParser = require('body-parser');
const app = express();
const path= require('path');
const dotenv= require('dotenv').config();


mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGODB_PATH,
  {useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  // Lancement de express
app.use(express.json())

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Cross-Origin-Resource-Policy", "same-site")
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// Lancement des routes
app.use('/api/auth', userRoutes);
app.use(User);
  
module.exports = app;