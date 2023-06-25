import express from 'express';
const apiRouter = express.Router();
import apiController from '../controllers/apiController.js';

apiRouter.get('/nfl', apiController.getNflData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

export default apiRouter;
