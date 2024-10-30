import express from 'express';
import { 
  createProduct, 
  getProductsByStock, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from '../controllers/ProductController.js'
import { authenticateToken } from '../middleware/authMiddleware.js';

const Productrouter = express.Router();
// Route to create a new product (protected)
Productrouter.post('/Addproduct', authenticateToken, createProduct);

// Route to get all products by stock_id (protected)
Productrouter.get('/products/:stock_id', authenticateToken, getProductsByStock);

// Route to get a single product by ID (protected)
Productrouter.get('/products/:id', authenticateToken, getProductById);

// Route to update a product by ID (protected)
Productrouter.put('/Updateproducts/:id', authenticateToken, updateProduct);

// Route to delete a product by ID (protected)
Productrouter.delete('/Deleteproducts/:id', authenticateToken, deleteProduct);

export default Productrouter;
