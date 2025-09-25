import mongoose  from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema ({
   _id : ObjectId ,
  username :{ type : String , require: true, unique : true},
  password :{ type : String , require : true},
  email :{ type : String , require : true, unique: true},
  phoneNumber:{ type : Number, require : true , unique : true}
})

const TagSchema = new Schema ( {
    title : {type : String,require : true , unique : true}

})


const contentType = ['image','video','article','audio']
const contentSchema = new Schema({
    link : { type : String , require : true },
    type :{ type : String , enum :contentType, require : true}
})


export const UserModel = mongoose.model("User", UserSchema);


