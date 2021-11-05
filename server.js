const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const config = require('./Config/key');

const {User} = require('./Models/User');

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected...')
}).catch( err => {console.log(err)})

app.get('/', (req, res) => {
  res.send('Hi Im Camila and her boyfriend HyunSoo')
});

app.post('/register', (req, res) => {
  // 회원가입 할때 필요한 정보들을 client에서 가져오면 
  // 그것들으 데이터 베이스에 넣어준다
  const user = new User(req.body);
  // req.body = {id: asdsd, password: asdasd} 이런 데이터를 json타입으로 req.body에 들어있음, body-parser 기능
  user.save((err, userInfo) => {
    // 클라이언트에 저장시 
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  });
});






app.listen(1000, () => {console.log('Server Port 1000 connecting...')});
