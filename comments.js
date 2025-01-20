// Create web server
// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', (req, res) => {
  const data = fs.readFileSync('comments.json');
  const comments = JSON.parse(data);
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const data = fs.readFileSync('comments.json');
  const comments = JSON.parse(data);
  const newComment = {
    id: comments.length + 1,