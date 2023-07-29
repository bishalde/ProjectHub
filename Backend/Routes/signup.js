
const userDetails = require('../models/userDetails');

const signup = async (req, res) => {
    if(Object.keys(req.body).length === 0){
        return res.status(400).send({error:"No data was provided"});
    }
    else{
        try{
            const {username , password ,email } = req.body

            
            const foundUsername = await userDetails.findOne({username: username})
            if(foundUsername){
                return res.status(400).send({error:"Username already exists"});
            }
            
            const foundUserEmail = await userDetails.findOne({email: email})
            if(foundUserEmail){
                return res.status(400).send({error:"User Email Already Exists"});
            }
            
            const userDetail = new userDetails({username , password ,email });
            const userDetailSaved = await userDetail.save().then(() => {
                res.status(201).json(userDetail)
            })


        }
        catch(err){
            console.log(err)
            return res.status(400).send({error:err});
        }
    }
}

module.exports = signup;