// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create users
  var tomId = Meteor.users.insert({
    profile: { name: 'Math Teacher' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'EdTech Startup' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var amyId = Meteor.users.insert({
    profile: { name: 'Amy'}
  });
  var amy = Meteor.users.findOne(amyId);

  var steveId = Meteor.users.insert({
    profile: { name: 'Steven' }
  });
  var steve = Meteor.users.findOne(steveId);
  }
  
  var telescopeId = Posts.insert({
    title: 'Better ways to learn German',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://DeutschLearning.com',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 3,
    upvoters: [], votes: 12
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Would you be available to offer feedback on our language application?'
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'Sure thing. I would love to help--anything to make learning a language easier!'
  });

  Comments.insert({
    postId: telescopeId,
    userId: amy._id,
    author: amy.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'I would love to test out the app.'
  });
  
  Posts.insert({
    title: 'Classroom Management',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://edTech.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 9
  });
  
  Posts.insert({
    title: 'The Algebra Assistant',
    userId: tom._id,
    author: tom.profile.name,
    url: 'http://algebraassistant.com',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 7
  });

    Posts.insert({
    title: 'A New Approach to MOOCs',
    userId: steve._id,
    author: steve.profile.name,
    url: 'http://CourseOne.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 5 
  });

    Posts.insert({
    title: 'Chemistry on the Go',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://Chemonthego.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 3
  });
  
  Posts.insert({
    title: 'Physics for Poets',
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://PoetryofPhysics.com',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 5
  });
  /* for (var i = 0; i < 10; i++) {
    Posts.insert({
      title: 'Test post #' + i,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      submitted: now - i * 3600 * 1000 + 1,
      commentsCount: 0,
      upvoters: [], votes: 0
    });
  } */