import authRoutes from './authRoutes.js';
import campaignRoutes from './campaignRoutes.js';
import influencerRoutes from './influencerRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import adminRoutes from './adminRoutes.js';
import brandRoutes from './brandRoutes.js';

const routes = [
  { path: '/api/auth', handler: authRoutes },
  { path: '/api/campaigns', handler: campaignRoutes },
  { path: '/api/influencers', handler: influencerRoutes },
  { path: '/api/payments', handler: paymentRoutes },
  { path: '/api/admin', handler: adminRoutes },
  { path: '/api/brands', handler: brandRoutes },
];

export default routes;
