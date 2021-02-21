const {Schema, model} = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  realName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true,
    default: 1
  }
});

module.exports = model('user', schema);
