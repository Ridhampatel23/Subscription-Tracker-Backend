import { Router } from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription, getUserSubscriptions} from "../controllers/subscription.controller.js";

const subscriptionRouter = new Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get All Subscriptions'}));
subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get Subscription details'}));
subscriptionRouter.post('/',   authorize,  createSubscription);
subscriptionRouter.put('/id', (req, res) => res.send({title: 'Update Subscription'}));
subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'Delete Subscription'}));
subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL a subscription'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get Upcoming Renewals'}));


export default subscriptionRouter;