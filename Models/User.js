const mongoose = require('mongoose');

const userSchema = mongoose.Schema( {
  name : {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 8
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
  // 토큰의 유효기간
});

const User = mongoose.model('User', userSchema);  
//  스키마를 모델로 감싸줌
module.exports = {User};
// 감싼 모델을 exports 해줌

