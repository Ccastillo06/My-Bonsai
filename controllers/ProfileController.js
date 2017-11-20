const User = require("../models/User");

module.exports = {
  // Profile Controllers.
  profileGet: (req,res) => {res.render('profiles/profile');},

  profileEditGet: (req,res) => {res.render('profiles/edit', {errorMessage: ''});},
  profileEditPost: (req,res) => {
    const update = {
      name: req.body.name,
      photo: req.file.filename,
      location: req.body.location,
    };
    User.findByIdAndUpdate(req.user._id, update).then( () => {
      res.redirect('/profile');
    }).catch( e => {
      res.render('profiles/edit', {errorMessage: `Couldn't edit your profile`});
    });
  }
};
