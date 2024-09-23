import mongoose from 'mongoose';

// Define the schema for the Product collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image:{
    type:String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    trim: true,
  },
  stock_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stock', // Referencing the Stock model
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

export default Product;
