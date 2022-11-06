const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    handle: req.user.handle,
    email: req.user.email
  });
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ handle: req.body.handle }).then(user => { 
    if (user) {
      errors.handle = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        handle: req.body.handle,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, handle: user.handle };
               console.log(payload)
              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.delete('/:user_id', (req, res) => {
  User.findOneAndDelete({_id: req.params.user_id}).then(user => {
    return res.json(user);
  })
  .catch(err => {
    return res.status(400).json(err)
  })
})


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "This user does not exist";
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, email: user.email };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Incorrect password";
        return res.status(400).json(errors);
      }
    });
  });
});

router.post('/findByEmail', (req, res) => {
  User.findOne({email: req.body.email}).then(user => { 
    return res.json(user)
  })
})

router.get('/:id', (req, res) => {
  User.findOne({_id: req.params.id }).then(user => {
      const matches = user.matches
      console.log('this is the matches fatass',matches)
      return res.json(matches)
    })
    .catch(err => {return res.status(400).json(err)})
  }
)

router.get('/workaround/:id', (req, res) => {
  User.findOne({_id: req.params.id}).then(user => {
    const matches = user.matches.concat([
      { user_id: '62f2ec5fa73c7fb7b92f2623',
        name:'Ross Geller',
        description:"Dinosaurs and their skeletons are great. Don't eat my sandwich and we were on a break.",
        interests:["Dinosaurs","Being a doctor","Mueseums"],
        age:27,
        gender:"male",
        personality:["Fun","Angry","Playful"],
        loveLanguage:"Touch",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/ross_geller.webp',
        happinessLevel:90,
        location:"New York City",
        commitmentLevel:70,
        pronouns:"he/him",
       },
       { user_id: '62f2eddbf15631836f6b5b46',
        name:'Joey Tribbiani',
        description:'How you doing?',
        interests:["Food","Women","Food"],
        age:36,
        gender:"male",
        personality:["spontaneous","loving","fun"],
        loveLanguage:"Receiving Gifts",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/joey.jpeg',
        happinessLevel:30,
        location:"New York City",
        commitmentLevel:60,
        pronouns:"he/him",
       },
       { 
        user_id: '62f2ee17f15631836f6b5b50',
        name:'Rachel Green',
        description:"I love fashion and Monica Geller",
        interests:["business","fashion","clothes"],
        age:31,
        gender:"female",
        personality:["outgoing","fun","passionate"],
        loveLanguage: "Words of Affirmation",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/rachelgreen.jpeg',
        happinessLevel:80,
        location:"New York City",
        commitmentLevel:85,
        pronouns:"she/her",
       },
       { user_id: '62f2ee37f15631836f6b5b5a',
        name:'Phoebe Buffay',
        description:"Everyone has their own lobster. I am trying to find mine.",
        interests:["singing","traveling","making music"],
        age:32,
        gender:"female",
        personality:["Interesting","Funny","Feeling",],
        loveLanguage:"touch",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/phoebe.webp',
        happinessLevel:95,
        location:"New York City",
        commitmentLevel:35,
        pronouns:"she/her",
       },
       { user_id: '62f2ee56f15631836f6b5b60',
        name:'Chandler Bing',
        description: "I am just trying to find someone.",
        interests: ["work","sarcasm","traveling"],
        age: 33,
        gender: "male",
        personality: ["fun","funny","sarcastic"],
        loveLanguage: "Quality Time",
        imageUrl: 'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/chandler.webp',
        happinessLevel: 87,
        location: "New York City",
        commitmentLevel: 78,
        pronouns: "he/him",
       }
    ]);
    user.matches = matches;
    user.save()
    return res.json(user)
  })
})


module.exports = router;