const mongoose= require('mongoose')
const {Schema} =mongoose

const Roles={
    admin:'admin',
    customer:'customer'
};

const userSchema = new Schema({
    name:String,
    address:String,
    phonenumber:Number,
    email:{
        type:String,
        unique:true
    },
    password:String,
    role: {
        type: String,
        enum: [Roles.admin,Roles.customer],
        default:Roles.customer, // Default role is customer
      },
   
})

const UserModel = mongoose.model('User',userSchema);

module.exports = UserModel;