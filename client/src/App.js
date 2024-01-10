import { useState } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PaymentSuccess from "./PaymentSuccess";
import Home from "./Home";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path="/" index element={<Home/>}></Route>
           <Route path="/paymentsuccess" element={<PaymentSuccess/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
