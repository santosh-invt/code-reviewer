exports.allAccess = (req, res) => {
  if(req.body.check) {
    return res.status(200).send('CHECK PASSED');
  } else {
    res.status(200).send("CHECK NOT PASSED");
  }
  
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
