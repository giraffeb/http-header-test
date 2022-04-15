const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next)=>{


  next();
});

app.use(express.static('public'));

app.get('/', async (req, res) => {

  res.sendFile('./public/index.html');
});

app.listen(PORT, ()=>{
  console.log(`START APP PORT: ${PORT}`);
});