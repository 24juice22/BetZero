import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import apiRouter from './routes/apiRouter.js';
import apiController from './controllers/apiController.js';

const app = express();
const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiController.getData);

// Handle invalid endpoint
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Handle errors
app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
