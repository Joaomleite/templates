import { Router } from 'express';

const routes = Router();

routes.get('/healthness', (req, res) => {
  return res.send('Server is on!');
});

export default routes;
