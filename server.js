import express from 'express'
import publicRoutes from './src/routes/public.js'
import privateRoutes from './src/routes/private.js'
import auth from './middlewares/auth.js';

const app = express();
app.use(express.json());

app.use('/', publicRoutes);
app.use('/', auth, privateRoutes);

const port = 3000;

app.listen(3000, () => console.log(`Servidor rodando na porta ${port}`));

