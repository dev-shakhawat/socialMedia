const { lengthValidator, userNameValidator, emailValidator, passwordValidator, birthYearValidator, userNameValidatorOnDB } = require("../../helpers/validation");
const argon2 = require('argon2');
const userSchema = require("../../models/userModel");



const register = async (req , res) => {
    try {
        
        const {
            fName , 
            lName , 
            userName , 
            email , 
            password ,  
            gender ,  
            bDay,
            bMonth ,
            bYear
        } = req.body


        // fname validation
        if(!lengthValidator(fName , 3 , 20)) {
            return res.status(400).json({message : "First name must be between 3 to 20 characters"});
        }


        // lname validation
        if(!lengthValidator(lName , 3 , 20)) {
            return res.status(400).json({message : "Last name must be between 3 to 20 characters"});
        }


        // userName validation
        if(!userNameValidator(userName)){
            return res.status(400).json({message : "Username must be 3–30 characters, letters, numbers, dots, or underscores only."});
        }


        const finalUsername = await userNameValidatorOnDB(userName); 
        console.log(finalUsername);
        
        


        // email validation
        if(!emailValidator(email)) {
            return res.status(400).json({message : "Email is not valid"});
        }


        // check if user already exists
        const userExists = await userSchema.findOne({email});
        if(userExists) {
            return res.status(400).json({message : "User already exists"});
        }

        


        // birth validation
        if(!bDay || !bMonth || !bYear) {
            return res.status(400).json({message : "Date of birth is required"});
        }



        // year validation 
        if(!birthYearValidator(bYear)) {
            return res.status(400).json({message : "You must be at least 15 years old"});
        }


        // password validation
        if(!passwordValidator(password , 8 , 32)) {
            return res.status(400).json({message : "Use 8–32 chars, including uppercase, lowercase, number, and symbol."});
        }


        // hash password
        let hashPass ;
        try {
            hashPass = await argon2.hash(password);
        } catch (err) {
            return res.status(400).json({message : "Error while hashing password"});
        }


        // gender validation
        if(!gender) return res.status(400).json({message : "Gender is required"});


        const user = await userSchema.create({
            fName , 
            lName , 
            userName: finalUsername , 
            email , 
            password : hashPass , 
            gender , 
            bDay , 
            bMonth , 
            bYear
        })

        return res
            .status(201)
            .json({message : "User created successfully , Please verify your email"});


    } catch (error) {
        res.status(400).json(error);
    }
}



module.exports = register