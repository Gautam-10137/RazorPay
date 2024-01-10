import React from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const searchQuery=useSearchParams()[0];
    const referenceNum=searchQuery.get("reference");

  return (
    <div>
      <h2>Order SuccessFul</h2>
      <strong>Reference No.-</strong>
      {referenceNum}
      
    </div>
  )
}

export default PaymentSuccess
