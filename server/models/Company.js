import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    // You can add other fields here if needed
  },
  {
    timestamps: true, // Enables createdAt and updatedAt fields
  }
);

const Company = mongoose.model('Company', companySchema);

export default Company;
