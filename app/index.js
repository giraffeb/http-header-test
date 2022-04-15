const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

const path = require('path');

app.use((req, res, next)=>{
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

app.use(express.static('public'));

app.get('/', async (req, res) => {

  const indexFilePath = path.join(__dirname, '/public/index.html')
  res.sendFile(indexFilePath);
});

app.listen(PORT, ()=>{
  console.log(`START APP PORT: ${PORT}`);
});