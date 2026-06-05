import { Router } from "express";
import { getRanking } from "../controllers/dashboard.controller.js";

const dashboardRouter = Router();

dashboardRouter.get("/ranking", getRanking);

export default dashboardRouter;