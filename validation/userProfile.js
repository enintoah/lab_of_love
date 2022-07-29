const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserProfile(data) {

  let errors = {};

  data.description = validText(data.description) ? data.description : '';
  data.interests = validText(data.interests) ? data.interests : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.personality = validText(data.personality) ? data.personality : '';
  data.loveLanguage = validText(data.loveLanguage) ? data.loveLanguage : '';
  data.location = validText(data.location) ? data.location : '';
  data.pronouns = validText(data.pronouns) ? data.pronouns : '';
  
  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required'
  }

  // if (Validator.isEmpty(data.interests)) {
  //   errors.interests = 'Interests field is required'
  // }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required'
  }

  // if (Validator.isEmpty(data.personality)) {
  //   errors.personality = 'Personality field is required'
  // }

  if (Validator.isEmpty(data.loveLanguage)) {
    errors.loveLanguage = 'Love Language field is required'
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required'
  }

  if (Validator.isEmpty(data.pronouns)) {
    errors.pronouns = 'Pronouns field is required'
  }
  // if (!Validator.isFloat(data.age, {min: 18})){
  //   errors.age = 'Age field is required'
  // }

  // if (!Validator.isFloat(data.happinessLevel, { min: 0, max: 100 })){
  //   errors.happinessLevel = 'Happiness Level field is required'
  // }
  
  // if (!Validator.isFloat(data.commitmentLevel, { min: 0, max: 100 })){
  //   errors.commitmentLevel = 'Commitment Level field is required'
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
  
};