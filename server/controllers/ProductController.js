import upload from '../config/upload.js';
import Product from '../models/Product.js'; // Adjust the import path if necessary
import fs from 'fs';
import path from 'path';
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
  // Use Multer's upload middleware directly inside the function
  upload.single('image')(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: 'Image upload failed', error: err });
    }

    try {
      const { name, description, price, quantity, category } = req.body;
      const { id } = req.params;

      // Find the existing product by ID
      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      // Check if a new image was uploaded and delete the old one if it exists
      if (req.file) {
        const oldImagePath = path.join('./uploads/', product.image);
        if (fs.existsSync(oldImagePath)) {
          try {
            await fs.promises.unlink(oldImagePath); // Asynchronous delete
            console.log('Old image deleted successfully');
          } catch (deleteErr) {
            console.error('Failed to delete old image:', deleteErr);
          }
        } else {
          console.log('Old image not found, skipping delete');
        }

        // Update the product with the new image filename
        product.image = req.file ? req.file.filename : null;
      }

      // Update the product details
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.quantity = quantity || product.quantity;
      product.category = category || product.category;

      // Save the updated product
      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);

    } catch (error) {
      res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
  });
};


// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Construct the path to the image file
    const imagePath = path.join('./uploads/', product.image);
    console.log('Image path:', imagePath); // Log the path for debugging

    // Delete the image file if it exists
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath); // Synchronously delete the image
      console.log('Image deleted successfully');
    } else {
      console.log('Image not found, skipping delete');
    }

    // Delete the product from the database
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error: error.message });
  }
};

