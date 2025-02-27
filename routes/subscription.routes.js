import { Router } from 'express';

const subscriptionRouter = new Router();

subscriptionRouter.get('/', (req, res) => res.send({title: 'Get All Subscriptions'}));
subscriptionRouter.get('/:id', (req, res) => res.send({title: 'Get Subscription details'}));
subscriptionRouter.post('/', (req, res) => res.send({title: 'Creat a Subscription'}));
subscriptionRouter.put('/id', (req, res) => res.send({title: 'Update Subscription'}));
subscriptionRouter.delete('/:id', (req, res) => res.send({title: 'Delete Subscription'}));
subscriptionRouter.get('/user/:id', (req, res) => res.send({title: 'Get All user Subscriptions'}));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({title: 'CANCEL a subscription'}));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({title: 'Get Upcoming Renewals'}));


export default subscriptionRouter;