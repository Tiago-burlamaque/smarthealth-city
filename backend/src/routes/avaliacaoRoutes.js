import express from 'express'
import { createAvaliacao } from '../controllers/avaliacao.Controller.js';

const avaliacaoRouter = express.Router();

avaliacaoRouter.post("/", createAvaliacao);

export default avaliacaoRouter;