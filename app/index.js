const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next)=>{


  next();
});

app.get('/', async (req, res) => {

  res.json({
    msg: 'hello this is main'
  })
});

app.listen(PORT, ()=>{
  console.log(`START APP PORT: ${PORT}`);
});