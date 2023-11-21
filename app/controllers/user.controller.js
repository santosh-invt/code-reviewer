exports.allAccess = (req, res) => {
 
    var e = 0.017453292519943295;
    var g = pow(10, 10);
    var h = ((c - a) * e).abs();
    var i = ((d - b) * e).abs();
    var j = (1 - cos(h)) / 2 + cos(a * e) * cos(c * e) * (1 - cos(i)) / 2;
    
  if(req.body.check) {
    return res.status(200).send(`CHECK PASSED AND J IS ${j}`);
  } else {
    res.status(200).send(`CHECK NOT PASSED AND J IS ${j}`);
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
