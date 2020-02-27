const express = require('express');
const mongoose = require('mongoose');

let Book = require('.models/bookSchema');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const port = process.env.PORT || 3000;
const bookRouter = express.Router();

bookRouter.route('/books')
  .get((req,res) => {
   Book.find((err,books)=>{
     if (err) {
      return res.send(err);
     }
     return res.json(books);
  });
});

app.use('/api',bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
