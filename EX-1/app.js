import express from 'express';
import logger from './middleware/logger.js';
import userRoute from './routes/userRoute.js';
const app = express();
app.use(express.json());
// Logger middleware
app.use(logger);

// GET /users - List all users
app.use('/users', userRoute);
export default app;