const express = require('express');

const app = express();
app.use(express.json());
let idCount = 2;

const bricks = [
  {
    id: 1,
    text: 'First message',
  },
  {
    id: 2,
    text: 'Second message',
  },
];

app.get('/api/bricks', (req, res) => {
  res.json(bricks);
});

app.post('/api/bricks', (req, res) => {
  const body = req.body;
  idCount++;
  const newBrick = {
    id: idCount,
    text: body.text,
  }
  bricks.push(newBrick)
  res.json(newBrick)
});

app.listen(5000, () => {
  console.log('Server is running');
});
