import express from 'express';
import { approveCampaign } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.put('/approve/:campaignId', protect, admin, approveCampaign);

export default router;
