const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User')

const UserProfileSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, ref: 'users', required: true},
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true 
  },
  interests: {
    type: [String],
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 18
  },
  gender: {
    type: String,
    required: true
  },
  personality: {
    type: [String],
    required: true
  },
  loveLanguage: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
  },
  happinessLevel: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  location: {
    type: String,
    required: true
  },
  commitmentLevel: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  pronouns: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

module.exports = UserProfile = mongoose.model('UserProfile', UserProfileSchema);