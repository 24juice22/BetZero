import express from 'express';
const apiRouter = express.Router();
import apiController from '../controllers/apiController.js';

apiRouter.get('/nfl', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

apiRouter.get('/mlb', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

apiRouter.get('/nba', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

apiRouter.get('/nhl', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

apiRouter.get('/ncaaf', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

apiRouter.get('/ncaab', apiController.getData, (req, res) => {
  return res.status(200).json(res.locals.data);
});

export default apiRouter;
