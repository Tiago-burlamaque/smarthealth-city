import express from 'express';
import { createAluno } from '../controllers/aluno.Controller.js';

const alunoRouter = express.Router();

alunoRouter.post('/', createAluno);

export default alunoRouter;