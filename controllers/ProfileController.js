const User = require("../models/User");

module.exports = {
  // Profile Controllers.
  profileGet: (req,res) => {res.render('profiles/profile');},

  profileEditGet: (req,res) => {res.render('profiles/edit', {errorMessage: ''});},
  profileEditPost: (req,res) => {
    let photo = '';
    (req.file)? photo = req.file.filename : photo = req.user.photo;
    const location = {
      city: req.body.city,
      lat: req.body.lat,
      lng: req.body.lng,
    };
    const update = {
      name: req.body.name,
      photo,
      location,
    };
    User.findByIdAndUpdate(req.user._id, update).then( () => {
      res.redirect('/profile');
    }).catch( e => {
      res.render('profiles/edit', {errorMessage: `Couldn't edit your profile`});
    });
  }
};
