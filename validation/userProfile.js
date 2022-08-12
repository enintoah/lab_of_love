const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserProfile(data) {

  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.description = validText(data.description) ? data.description : '';
  data.interests = validText(data.interests) ? data.interests : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.personality = validText(data.personality) ? data.personality : '';
  data.loveLanguage = validText(data.loveLanguage) ? data.loveLanguage : '';
  data.location = validText(data.location) ? data.location : '';
  data.pronouns = validText(data.pronouns) ? data.pronouns : '';
  
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required'
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required'
  }

  if (Validator.isEmpty(data.loveLanguage)) {
    errors.loveLanguage = 'Love Language field is required'
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'Location field is required'
  }

  if (Validator.isEmpty(data.pronouns)) {
    errors.pronouns = 'Pronouns field is required'
  }

  if (!Validator.isFloat(data.age, {min: 18})){
    errors.age = 'You must be older than 18'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
  
};