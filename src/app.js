import express from 'express';
import usuariosRoutes from './routes/usuarioRoutes.js';

const app = express();
app.use(express.json());

app.use("/api/", usuariosRoutes);


export default app;