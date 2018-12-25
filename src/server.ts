import express from 'express';
const app = express();
const port = 7878;

let a = 9;
a = 8;

console.warn(a);
console.log('--99-');
console.log(process.env.PORT);

app.get('/', (req, res) => res.send(''));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
