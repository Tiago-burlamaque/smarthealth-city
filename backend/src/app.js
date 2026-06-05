import express from 'express'
import cors from 'cors'

import alunoRouter from "./routes/alunoRoutes.js"
import dashboardRouter from "./routes/dashboardRoutes.js";
import avaliacaoRouter from "./routes/avaliacaoRoutes.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/alunos", alunoRouter);
app.use("/avaliacoes", avaliacaoRouter);
app.use("/dashboard", dashboardRouter);

export default app;