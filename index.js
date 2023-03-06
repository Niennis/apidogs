const express = require('express');
const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
require('dotenv').config()

var cors = require('cors')

const { port, uri  } = require("./config")
const ListRoutes = require('./routes/list')
const ImagesRoutes = require('./routes/images')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(ListRoutes)
app.use(ImagesRoutes)

app.use((req, res) => {
  res.status(404).send('No se encontró')
})

mongoose.set('strictQuery', false)
mongoose.connect(uri)
  .then(db => {
    console.log(`Database is connected`)
    app.listen(port, () => {
      console.log(`Server on port ${port}`);
    })
  })
  .catch(err => console.log(err))
