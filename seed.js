const mongoose = require('mongoose');
const User = require('./models/User');
const UserProfile = require('./models/UserProfile');
const Message = require('./models/Message')
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  const seedUsers = [
    {
        email: "demo@gmail.com",
        handle: "demo",
        password: "123456",
        password2: "123456"
    },
    {
        email: "addrio@gmail.com",
        handle: "Alexandra Daddario",
        password: "123456",
        password2: "123456"
    },
    {
        email: "zendaya@gmail.com",
        handle: "Zendaya Coleman",
        password: "123456",
        password2: "123456"
    },
    {
        email: "bellaP@gmail.com",
        handle: "Bella Poarch",
        password: "123456",
        password2: "123456"
    },
    {
        email: "emma@gmail.com",
        handle: "Emma Stone",
        password: "123456",
        password2: "123456"
    },
    {
        email: "dojacat@gmail.com",
        handle: "Doja Cat",
        password: "123456",
        password2: "123456"
    }
    
  ];
  const seedUserProfiles = [
      { user_id: '62f2ec5fa73c7fb7b92f2623',
        name:'Ariana Grande',
        description:"Thank you, next.",
        interests:["singing","making music","fashion"],
        age:29,
        gender:"female",
        personality:["fun","deep","playful"],
        loveLanguage:"Touch",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png',
        happinessLevel:90,
        location:"Los Angeles",
        commitmentLevel:70,
        pronouns:"she/her",
       },
       { user_id: '62f2eddbf15631836f6b5b46',
        name:'Megan Fox',
        description:'MGK FOR LIFE',
        interests:["transformers","music","the beach"],
        age:36,
        gender:"female",
        personality:["thinker","cats","traveling"],
        loveLanguage:"Receiving Gifts",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png',
        happinessLevel:30,
        location:"New York",
        commitmentLevel:60,
        pronouns:"she/her",
       },
       { 
        user_id: '62f2ee17f15631836f6b5b50',
        name:'Kim Kardashian',
        description:"sad life",
        interests:["business","fashion","dating pete davidson"],
        age:41,
        gender:"female",
        personality:["outgoing","fun","passionate"],
        loveLanguage: "Words of Affirmation",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png',
        happinessLevel:80,
        location:"Los Angeles",
        commitmentLevel:85,
        pronouns:"she/her",
       },
       { user_id: '62f2ee37f15631836f6b5b5a',
        name:'Taylor Swift',
        description:"Love story, baby just say yes.",
        interests:["filming tiktok","traveling","making music"],
        age:32,
        gender:"female",
        personality:["Introvert","Fun","Feeling",],
        loveLanguage:"touch",
        imageUrl:'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png',
        happinessLevel:95,
        location:"Los Angeles",
        commitmentLevel:35,
        pronouns:"she/her",
       },
       { user_id: '62f2ee56f15631836f6b5b60',
        name:'Selena Gomez',
        description: "I do find that I'm drawn to people in my life, romantically or not, that have something to teach me.",
        interests: ["acting","making music","acting again"],
        age: 33,
        gender: "female",
        personality: ["fun","funny","fashionable"],
        loveLanguage: "Quality Time",
        imageUrl: 'https://lacks-aa-dev.s3.us-west-1.amazonaws.com/profile+picture.png',
        happinessLevel: 87,
        location: "Los Angeles",
        commitmentLevel: 78,
        pronouns: "she/her",
       }
  ];

  const seedMessages = [
    {
      message: "How you doing?",
      sender: "62e037b54780df32d1a7991e",
      recipient: "62e037d34780df32d1a79921"
    },
    {
      message: "You know how there's an I in Beautiful? So why aren't I in you, Beautiful?",
      sender: "62e037b54780df32d1a7991e",
      recipient: "62e037e94780df32d1a79924"
    },
    {
      message: "So uhhh... You look good in your picture",
      sender: "62e037fd4780df32d1a79927",
      recipient: "62e037b54780df32d1a7991e"
    },
    {
      message: "I am not interested. Sorry.",
      sender: "62e038894780df32d1a7992d",
      recipient: "62e037b54780df32d1a7991e"
    },
    {
      message: "Know any good restuarants around here?",
      sender: "62e037b54780df32d1a7991e",
      recipient: "62e038204780df32d1a7992a"
    }
  ]

  const seedDB = async () => {
    // await Message.deleteMany({});
    // await Message.insertMany(seedMessages)
    // await User.findOneAndUpdate({email: "addrio@gmail.com"}, {matches: [seedUserProfiles[0], seedUserProfiles[2], seedUserProfiles[3], seedUserProfiles[4], seedUserProfiles[5]]})
    // await User.findOneAndUpdate({email: "zendaya@gmail.com"}, {matches: [seedUserProfiles[0], seedUserProfiles[1], seedUserProfiles[3], seedUserProfiles[4], seedUserProfiles[5]]})
    // await User.findOneAndUpdate({email: "demo@gmail.com"}, {matches: [seedUserProfiles[1], seedUserProfiles[2], seedUserProfiles[3], seedUserProfiles[4], seedUserProfiles[5]]})
    // await User.findOneAndUpdate({email: "emma@gmail.com"}, {matches: [seedUserProfiles[0], seedUserProfiles[1], seedUserProfiles[2], seedUserProfiles[3], seedUserProfiles[5]]})
    // await User.findOneAndUpdate({email: "dojacat@gmail.com"}, {matches: [seedUserProfiles[0], seedUserProfiles[1], seedUserProfiles[2], seedUserProfiles[3], seedUserProfiles[4]]})
    // await User.findOneAndUpdate({email: "bellaP@gmail.com"}, {matches: [seedUserProfiles[0], seedUserProfiles[1], seedUserProfiles[2], seedUserProfiles[4], seedUserProfiles[5]]})
    // await UserProfile.deleteMany({});
    await UserProfile.insertMany(seedUserProfiles);
  }

  seedDB().then(()=>{
    mongoose.connection.close();
  });