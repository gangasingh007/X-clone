import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    fullname :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    },
    email : {
        type :String,
        required :true,
        unique : true
    },
    followers : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        default : []
    }],
    following : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        default : []
    }],
    profileimg : {
        type : String,
        default  : "https://www.svgrepo.com/show/43426/profile.svg"
    },
    coverimg : {
        type  : String,
        default : "https://www.proactivechannel.com/Files/BrandImages/Default.jpg"
    },
    Bio : {
        type :String,
        default :""
    },
    Link : {
        type : String,
        default : ""
    }
})

const User = mongoose.model("User",userSchema);

export default User;