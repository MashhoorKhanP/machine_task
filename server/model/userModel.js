import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  uName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  profileImage:{
    type: String,
    default:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png'
  },
  password: {
    type: String,
    required: true
  },
  isBlocked:{
    type: Boolean,
    default: false
  }

}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;