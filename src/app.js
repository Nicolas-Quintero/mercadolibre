const express = require('express');
const {resolve} = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'))
console.log(__dirname);

app.get('/', (req, res) => {
  let view = resolve(__dirname, '../views','index.html');
  return res.sendFile(view);
}) ;
app.listen(port,()=>{
    console.log("servidor puerto 3000")
});