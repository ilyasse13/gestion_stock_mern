import upload from '../config/upload.js';
import Product from '../models/Product.js'; // Adjust the import path if necessary

// Create a new product
export const createProduct = (req, res) => {
    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
  
      try {
    
        const newProduct = new Product({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          quantity: req.body.quantity,
          category: req.body.category,
          stock_id: req.body.stock_id, // Use stock ID from request
          image: req.file ? `/uploads/${req.file.filename}` : null, // Store image path
        });
  
        // Save product to database
        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully!', product: newProduct });
      } catch (error) {
        res.status(500).json({ message: 'Error creating product', error });
      }
    });
  };
  


// Get all products by stock_id
export const getProductsByStock = async (req, res) => {
    try {
      const { stock_id } = req.params; // Get the stock_id from the request parameters
  
      // Find all products with the given stock_id
      const products = await Product.find({ stock_id });
  
      if (!products || products.length === 0) {
        return res.status(404).json({ message: 'No products found for this stock' });
      }
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve products', error: error.message });
    }
  };
  

// Get a single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve product', error: error.message });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { name, image, description, price, quantity, category, stock_id } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, image, description, price, quantity, category, stock_id },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product', error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error: error.message });
  }
};
