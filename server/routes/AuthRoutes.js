// server/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, logoutUser, verifyEmail, forgotPassword, resetPassword, checkAuth } from '../controllers/AuthController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/verify-email',verifyEmail)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/check-auth", authenticateToken, checkAuth);



export default router;
