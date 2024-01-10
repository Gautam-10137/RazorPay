const Razorpay=require('razorpay');
require('dotenv').config();
const RAZORPAY_API_KEY=process.env.RAZORPAY_API_KEY;
const RAZORPAY_API_SECRET=process.env.RAZORPAY_API_SECRET;
const crypto=require('crypto');
const Payment=require('../models/payment');

const instance = new Razorpay({
    key_id: RAZORPAY_API_KEY,
    key_secret: RAZORPAY_API_SECRET
  });

const checkout=async(req,res)=>{
    try{
        var options = {
        amount: Number(req.body.amount*100),  // amount in the smallest currency unit
        currency: "INR",
      
      };
      const order=await instance.orders.create(options);
      console.log(order);
      res.status(200).json({
        order
      });
    }
    catch(error){
        res.status(500).json('Internal Server Error');
    }
}

const paymentVerification=async (req,res)=>{
  const {razorpay_order_id,razorpay_payment_id,razorpay_signature}=req.body;

  const body=razorpay_order_id+"|"+razorpay_payment_id;

  const expectedSignature=crypto.createHmac('sha256',RAZORPAY_API_SECRET)
                          .update(body.toString())
                          .digest('hex')


  const isAuthentic=razorpay_signature===expectedSignature;
  if(isAuthentic){
  //  database comes here
  // await Payment.create({razorpay_order_id,razorpay_payment_id,razorpay_signature});
    res.redirect(`http://127.0.0.1:3000/paymentsuccess?reference=${razorpay_payment_id}`);
  }

}


module.exports={checkout,paymentVerification};