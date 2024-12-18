import express from 'express';
import { processPayout } from '../controllers/paymentController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/payout', protect, processPayout);

export default router;
