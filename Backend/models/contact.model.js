import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ContactSchema = mongoose.Schema({
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
  Message: {
    type: String,
    required: [true,"Message is required"],
    maxlength: 1000,
    minlength:1,
    trim: true
  },
 
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
ContactSchema.plugin(uniqueValidator);

// compile schema to model
const ContactSchemaModel = mongoose.model('Contact_collection',ContactSchema);

export default ContactSchemaModel;



