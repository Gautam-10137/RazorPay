const express=require('express');
const router=express.Router();
const PaymentController=require('../controllers/PaymentController');
require('dotenv').config();
const RAZORPAY_API_KEY=process.env.RAZORPAY_API_KEY;

router.post('/checkout',PaymentController.checkout);
router.get('/get-key',(req,res)=>{
     res.status(200).json({key:RAZORPAY_API_KEY});
})

router.post('/payment-verification',PaymentController.paymentVerification);

module.exports=router;