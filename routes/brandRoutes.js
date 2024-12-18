import express from 'express';
import { getCampaignInsights } from '../controllers/brandController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/insights', protect, getCampaignInsights);

export default router;
