import { Router } from 'express';
import { keycloak } from '../auth/auth.js';

const router = Router();

router.use(keycloak.protect());

router.get('/', (req, res) => {
  res.json({ message: 'Access granted. Data received.' });
});


export default router;
