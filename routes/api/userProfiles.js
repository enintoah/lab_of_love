const express = require("express");
const router = express.Router();
const UserProfile = require('./../../models/UserProfile')
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateUserProfile = require('../../validation/userProfile');
const User = require("../../models/User");

router.get('/by_email', (req, res) => {
  User.findOne
})

// for getting every persons date for the week. 
// router.get('/', (req, res) => {

// })

router.get('/:user_id', (req, res) => {
  UserProfile.findOne({ user_id: req.params.user_id }).then(profile => {
    if (!profile) {
      const errors = {user_id: "does not exist"}
      return res.status(400).json(errors)
    } else {
      return res.json(profile)
    }
  })
})

router.patch('/:user_id', (req, res) => {
  console.log(req.body)
  const { errors, isValid } = validateUserProfile(req.body);

  if (!isValid) {
    return res.status(400).json(errors)
  }

  UserProfile.findOne({ user_id: req.params.user_id }).then(profile => {
    console.log(typeof profile.personality)
    profile.description = req.body.description;
    profile.interests[0] = req.body.interests1;
    profile.interests[1] = req.body.interests2;
    profile.interests[2] = req.body.interests3;
    profile.age = req.body.age;
    profile.gender = req.body.gender;
    profile.personality[0] = req.body.personality1;
    profile.personality[1] = req.body.personality2;
    profile.personality[2] = req.body.personality3;
    profile.loveLanguage = req.body.loveLanguage;
    profile.imageUrl = req.body.imageUrl;
    profile.happinessLevel = req.body.happinessLevel
    profile.location = req.body.location;
    profile.commitmentLevel = req.body.commitmentLevel;
    profile.pronouns = req.body.pronouns;
    console.log(profile)
    profile.save()
      .then(() => { return res.json(profile) })
      .catch(err => { return res.status(400).json(err) })
  })
  .catch(err => { return res.status(400).json(err) })
})

router.post('/', (req, res) => {
  const { errors, isValid } = validateUserProfile(req.body)

  if (!isValid) {
    return res.status(400).json(errors)
  }

  UserProfile.findOne({ user_id: req.body.user_id }).then(profile => {
    if (profile) {
      errors.user_id = "Profile already exists";
      return res.status(400).json(errors);
    } else {
      const newProfile = new UserProfile({
        user_id: req.body.user_id,
        description: req.body.description,
        interests: req.body.interests,
        age: req.body.age,
        gender: req.body.gender,
        personality: req.body.personality,
        loveLanguage: req.body.loveLanguage,
        imageUrl: req.body.imageUrl,
        happinessLevel: req.body.happinessLevel,
        location: req.body.location,
        commitmentLevel: req.body.commitmentLevel,
        pronouns: req.body.pronouns
      })
      newProfile
        .save()
        .then(profile => {
          return res.json(profile);
        })
        .catch(err => {
          return res.status(400).json(err)
        })
    }
  })
})

router.delete('/:user_id', (req, res) => {
  UserProfile.findOneAndDelete({ user_id: req.params.user_id }).then(result => {
    const success = {msg: "successfully deleted"};
    return res.json(success);
  })
  .catch(err => {
    return res.status(400).json({msg: "did not delete"})
  })
})
module.exports = router;
