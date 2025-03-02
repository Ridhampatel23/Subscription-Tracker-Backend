import {Router} from "express";
import {sendReminders} from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post('/subscriptions/reminder', sendReminders);
console.log("🚀 Mounting workflow routes");


export default workflowRouter;