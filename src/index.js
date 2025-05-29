import express from 'express';
import session from 'express-session';
import { keycloak, memoryStore } from './auth/auth.js';
import dataRouter from './routes/route.js';

const app = express();

app.use(session({
  secret: 'zhbforum',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware());

app.use('/data', dataRouter);

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
