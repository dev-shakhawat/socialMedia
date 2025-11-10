const jwt = require("jsonwebtoken");


exports.generateToken = async (_id , changeType , wishResult , expiresIn) => {

  const token = jwt.sign({ _id , changeType , wishResult  }, process.env.JWT_SECRET, { expiresIn });

  return token;

};
