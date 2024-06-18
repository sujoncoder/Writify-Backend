import express from 'express';
import cors from 'cors'
import authRouter from './routes/auth.route.js'
dotenv.config();

// express initial
const app = express();

// application layer
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5000'
}))
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter)

// client error handler
app.use((req, res, next) => {
  res.status(404).send('route not found');
  next();
});

// server site error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'internal server error';
  return res.status(statusCode).json({
    success: false,
    message: errorMessage,
    statusCode,
  });
});
