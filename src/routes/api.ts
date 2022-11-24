import express from "express";
import { HomeController } from "@framework/http";
const Router = express.Router();

Router.get("/", HomeController.index);

export default Router;
