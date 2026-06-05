import express from 'express'
import cors from 'cors'
import alunoRouter from './routes/aluno.Routes.js'
import avaliacaoRouter from './routes/avaliacao.Routes.js'
import dashboardRouter from './routes/dashboard.Routes.js'


const app = express()

app.use(express.json())
app.use(cors())

app.use("/alunos", alunoRouter);
app.use("/avaliacoes", avaliacaoRouter);
app.use("/dashboard", dashboardRouter);

export default app;