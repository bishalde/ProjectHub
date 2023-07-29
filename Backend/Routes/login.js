const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');

const userDetails = require("../models/userDetails");

const login = async (req, res) => {

  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: "No data was provided" })
  }
  else{
    try{
      const { username , password } = req.body

      const found = await userDetails.findOne({ username: username})

      if(found){
          const isMatch = await bcrypt.compare(password, found.password)
          if(isMatch){
            const token = jwt.sign({ id: found._id , username:found.username }, process.env.SECRET_KEY, { expiresIn: 3600 })
            return res.status(200).json({ token: token })
          }
          else{
            return res.status(400).json({ error: "Invalid Signature" })
          }

      }
      else{
        return res.status(400).json({ error: "Invalid Credentials" })
      }


      

    }
    catch(err){
      return res.status(400).send({ error: err })
    }
  }

};

module.exports = login;
