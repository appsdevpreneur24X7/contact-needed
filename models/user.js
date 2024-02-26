import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    }
   
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.matchPassword = async function (inputPwd) {
//   console.log("inputPwd : ", inputPwd, "this.password : ", this.password);
//   return await bcrypt.compare(inputPwd, this.password);
// };

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.model("User", userSchema);
export default User;