// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Create comments array
const comments = [
  {
    username: 'Todd',
    comment: 'lol that is so funny!'
  },
  {
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog'
  },
  {
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd'
  },
  {
    username: 'onlysayswoof',
    comment: 'woof woof woof'
  }
];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Post comments
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Get comments by username
app.get('/comments/:username', (req, res) => {
  const { username } = req.params;
  const comment = comments.find(c => c.username === username);
  res.json(comment);
});

// Delete comments by username
app.delete('/comments/:username', (req, res) => {
  const { username } = req.params;
  const idx = comments.findIndex(c => c.username === username);
  comments.splice(idx, 1);
  res.json({ msg: 'Comment deleted!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});