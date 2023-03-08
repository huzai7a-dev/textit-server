import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema(
  {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
            type: String,
            required: true
          },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    profile: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);

userSchema.methods.getAuthToken = function(){
  const token = jwt.sign({id:this._id},process.env.JWT_SECRET)
  return token
}
const User = mongoose.model("User", userSchema);

export default User