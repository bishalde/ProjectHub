const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userDetailsSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 4,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    dateOfCreated: {
        type: Date,
        default: Date.now
    }

})

userDetailsSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})

const UserDetails = new mongoose.model("userDetail", userDetailsSchema);

module.exports = UserDetails