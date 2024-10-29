import express from 'express';
import { 
  createProduct, 
  getProductsByStock, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from '../controllers/ProductController.js'

const Productrouter = express.Router();

// Route to create a new product
Productrouter.post('/Addproduct', createProduct);

// Route to get all products by stock_id
Productrouter.get('/products/:stock_id', getProductsByStock);

// Route to get a single product by ID
Productrouter.get('/products/:id', getProductById);

// Route to update a product by ID
Productrouter.put('/Updateproducts/:id', updateProduct);

// Route to delete a product by ID
Productrouter.delete('/Deleteproducts/:id', deleteProduct);

export default Productrouter;
