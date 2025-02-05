const mongoose=require('mongoose')

/**
 * name
 * userId
 * password
 * email
 * userType
 */

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required:true
    },
    email : {
        type : String,
        required : true,
        minLength : 10,
        lowercase : true,
        unique : true
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }
},{timestamps : true ,versionKey : false})

module.exports=mongoose.model("User",userSchema)