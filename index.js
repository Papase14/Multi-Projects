const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname, '/views/index.html'));
})

app.listen(port, () => {
  console.log(`Your app is live at ${port}`)
})