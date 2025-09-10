import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  FullName: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    trim: true,
  },
  Email: {
    type: String,
    required: [true,"Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  Password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  Mobile: {
    type: String,
    required: [true,"Mobile is required"],
    maxlength: 10,
    minlength:10,
    trim: true
  },
 
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

// compile schema to model
const UserSchemaModel = mongoose.model('user_collection',UserSchema);

export default UserSchemaModel;



