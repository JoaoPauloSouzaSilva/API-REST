const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require ('body-parser');

const app = express();
app.use(express.json());
const port = 3000; 

const Film = mongoose.model('Film', {
  title: String, 
  description: String, 
  image_url: String, 
  Trailer_url: String,

});

app.get("/", async (req, res) => {
  const films = await Film.find();
  return res.send(films);
});

app.put("/:id", async(req, res) => {
  const film = await Film.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    Trailer_url: req.body.Trailer_url
  }, {
    new: true
  });
  return res.send(film);
})

app.delete("/:id", async(req, res) => {
  const film = await Film.findByIdAndDelete(req.params.id);
  return res.send(film);
});

app.post('/', async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    Trailer_url: req.body.Trailer_url
  });

  await film.save();
  return res.send(film);
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  mongoose.connect('mongodb+srv://joaopaulloss477:HHGZJthzpc1CqqDZ@api-filme.phxktmk.mongodb.net/?retryWrites=true&w=majority');
  console.log('rodou');
});