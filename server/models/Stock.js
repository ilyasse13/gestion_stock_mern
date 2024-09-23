import mongoose from 'mongoose';


const stockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Pre-save middleware to hash the password before saving


const Stock = mongoose.model('Stock', stockSchema);

export default Stock;
