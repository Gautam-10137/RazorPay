import React,{useState} from 'react'
import axios from 'axios';
const Home = () => {
    const [amount,setAmount]=useState(0);
    const handleCheckout=async()=>{
            const {data:{key}}=await axios.get('http://127.0.0.1:7000/api/get-key');
            const {data:{order}}=await axios.post('http://127.0.0.1:7000/api/checkout',{
              amount
            });
            const options = {
              key: key, // Enter the Key ID generated from the Dashboard
              amount: order.amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: "INR",
              name: "Gautam's Finance",
              description: "Razopay Transaction",
              image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Razorpay_logo.webp",
              order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
              callback_url: "http://127.0.0.1:7000/api/payment-verification",
              prefill: {
                  "name": "Gautam Pahwa",  // details of logged-in user
                  "email": "gaurav.kumar@example.com",
                  "contact": "8689014713"
              },
              notes: {
                  "address": "Razorpay Corporate Office"
              },
              theme: {
                  "color": "#3399cc"
              }
          };
        
          const razor=new window.Razorpay(options);
          razor.open();
            
    }
    return (
      <div className="App">
             
              <input 
                type="number"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              ></input>
             <button onClick={handleCheckout}>Pay with Razorpay</button>
      </div>
    );
}

export default Home
