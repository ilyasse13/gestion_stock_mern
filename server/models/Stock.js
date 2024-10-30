import mongoose from 'mongoose';


const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true, // If you want this field to be mandatory
  },


}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});


const Stock = mongoose.model('Stock', stockSchema);

export default Stock;

