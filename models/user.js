// models/user.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String },
});

// Register the model with Mongoose
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
