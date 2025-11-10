const { default: mongoose } = require("mongoose");
const userSchema = require("../models/userModel");



exports.emailValidator = (email) => {
  if (!email || !email.trim()) return false;

  const regex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

  return regex.test(email.toLowerCase());
};


exports.lengthValidator = (value , min , max) => { 
  if(!value.trim()) return false
  return value.length >= min && value.length <= max;
}


exports.userNameValidator = (value) => {
  return value.toLowerCase().match(/^(?!.*[._]{2})(?![._])[a-zA-Z0-9._]{3,30}(?<![._])$/);
  
}



exports.passwordValidator = (value) => {
  if(!value.trim()) return false
  return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/);
}




exports.birthYearValidator = (year) => {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 15; // user must be at least 15 years old

  // Must be a 4-digit year and at least 15 years before the current year
  return /^\d{4}$/.test(year) && Number(year) <= minYear;
};





 

exports.userNameValidatorOnDB = async (username) => {

  let isTaken = true;
  let finalUsername = username;

  do{

    const user = await userSchema.findOne({ userName : finalUsername });

    if(user) {
      finalUsername = `${username}${Math.floor(1000 + Math.random() * 900000)}`
      isTaken = true;
    }else {
      isTaken = false;
    }

  }while(isTaken)

  return finalUsername
  
};
