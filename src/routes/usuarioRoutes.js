import express from 'express'
import { getUsuarios, postUsuarios, deleteUsuarios, updateUsuarios } from '../controllers/usuarioController.js';
const router = express.Router();

router.get('/usuarios', getUsuarios);
router.post('/usuarios', postUsuarios);
router.delete('/usuarios/:id', deleteUsuarios);
router.put('/usuarios/:id', updateUsuarios);

export default router;