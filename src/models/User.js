const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  profile_img: {
    type: String,
    default: 'https://picsum.photos/200/30',
    trim: true,
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  birth_date: {
    type: Date,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
  versionKey: false,
});

const User = model('User', userSchema, 'Users');

module.exports = User;
