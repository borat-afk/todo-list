const express = require('express');

const app = express();
app.use(express.json());
let idCount = 2;

let bricks = [
  {
    id: 1,
    username: 'TestUser',
    password: 1111,
    todos: [
      {
        id: 1,
        text: 'First message',
        isConfirmed: false,
      },
      {
        id: 2,
        text: 'Second message',
        isConfirmed: false,
      },
    ],
  }
];

app.get('/api/bricks', (req, res) => {
  res.json(bricks[0].todos);
});

app.put('/api/bricks', (req, res) => {
  const body = req.body.user;
  bricks[0].todos.forEach(item => {
    if (item.id === body.id) {
      item.isConfirmed = body.isConfirmed
    }
    res.json(bricks)
  })
});

app.delete('/api/bricks', (req, res) => {
  const body = req.body;
  bricks[0].todos.splice(bricks[0].todos.findIndex(item => item.id === body.id), 1)
  res.json(bricks)
});

app.post('/api/bricks', (req, res) => {
  const body = req.body;
  idCount++;
  const newBrick = {
    id: idCount,
    text: body.text,
    isConfirmed: false,
  }
  bricks[0].todos.push(newBrick)
  res.json(newBrick)
});

app.listen(5000, () => {
  console.log('Server is running');
});
