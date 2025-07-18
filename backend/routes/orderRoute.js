import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe } from '../controllers/orderContoller.js'
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router()


// Admin Features
orderRouter.post('list', adminAuth, allOrders)
orderRouter.post('status', adminAuth, updateStatus)

//Payement Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/stripe', authUser, placeOrderRazorpay)

// User Features
orderRouter.post('/userorders', authUser, userOrders)

//verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)


export default orderRouter