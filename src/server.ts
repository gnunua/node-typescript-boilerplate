import express from 'express';
const app = express();
const port = 7878;

app.get('/', (req, res) => {
  console.log('1');
  return res.send('1');
});

app.get('/2', (req, res) => {
  console.log('2');
  return res.send('2');
});

//  "postinstall": "npm run build",

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
