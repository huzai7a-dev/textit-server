import mongoose from "mongoose";

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


const User = mongoose.model("User", userSchema);

export default User