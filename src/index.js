const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require ('body-parser');

const app = express();
const port = 3000; 
mongoose.connect('mongodb+srv://joaopaulloss477:HHGZJthzpc1CqqDZ@api-filme.phxktmk.mongodb.net/?retryWrites=true&w=majority');

const Film = mongoose.model('Film', {
  title: String, 
  description: String, 
  image_url: String, 
  Trailer_url: String,

});

app.get("/", (req, res) => {
  res.send("oi");
});

app.post('/', async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    Trailer_url: req.body.Trailer_url
  });

  await film.save();
  res.send(film);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log('rodou');
});