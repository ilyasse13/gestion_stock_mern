import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    stock_id: {
        type: mongoose.Schema.Types.ObjectId, // References the Stock collection
        ref: 'Stock', // Model name you're referencing
    },
},
    {
        timestamps: true,
    });


const Category = mongoose.model('Category', categorySchema);
export default Category;
