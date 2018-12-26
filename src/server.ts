import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('1');
  return res.send('1');
});

app.get('/2', (req, res) => {
  console.log('2');
  return res.send('2');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
