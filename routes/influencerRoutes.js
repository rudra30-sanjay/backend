import express from 'express';
import { applyForCampaign } from '../controllers/influencerController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', protect, applyForCampaign);

export default router;
