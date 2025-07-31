
import express from "express"
import { signin, signup, google } from "../Controllers/auth.controller.js";


const authRouter = express.Router();

authRouter.post("/signup", signup)
authRouter.post("/signin", signin)
authRouter.post("/google", google)

export default authRouter
