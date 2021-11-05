const express = require(express);
const app = express();
const { truncate } = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Akaza3:gustn3824@cluster0.7r0xw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected...')
}).catch( err => {console.log(err)})

app.get('/', (req, res) => {
  res.send('Hi Im Camila')
});

app.listen(1000, () => {console.log('Server Port 1000 connecting...')});
