import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app = express();
const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/', (_, res) => {
  let placeholderData = 65;
  console.log('inside server GETapi', placeholderData);
  res.status(200).json(placeholderData);
});

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
