const User = require("../models/User");

module.exports = {
  // Profile Controllers.
  profileGet: (req,res) => {res.render('profiles/profile');}
};
