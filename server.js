import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js'; // Import consolidated routes
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Default Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Register Routes Dynamically
routes.forEach((route) => {
  console.log(`Registering route: ${route.path}`);
  app.use(route.path, route.handler);
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
