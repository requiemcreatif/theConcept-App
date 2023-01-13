import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    minlength: [3, "Name must be at least 3 characters long."],
    maxlength: [20, "Name must be at most 20 characters long."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email.",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password."],
    minlength: [6, "Password must be at least 6 characters long."],
  },

  lastName: {
    type: String,
    minlength: [3, "Name must be at least 3 characters long."],
    maxlength: [20, "Name must be at most 20 characters long."],
    trim: true,
    default: "lastName",
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
