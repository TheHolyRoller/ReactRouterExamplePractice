import React from 'react'
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js'; 
import PM from '../pages/Styles/Payment.module.css'; 

function Payment() {
  return (
    <div className={PM.mainContainer}>
    
    {/* options={{"client-id": "Add in the client ID from your dev dashboard on paypal"} */}
    
    {/* 
    
    
    Order Amount here 
    
      createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                
                Use this instead of the other block of code below. 
                
                Ensure that you have added the alert to the use within the return statement
                
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
                
                
                
      Add in the onApprove function here 
      
      return fetch("/my-server/capture-paypal-order", {

      method: "POST",

      body: JSON.stringify({

        orderID: data.orderID

      })

    })

    .then((response) => response.json())

    .then((details) => {

      // This function shows a transaction success message to your buyer.

      alert('Transaction completed by ' + details.payer.name.given_name);

    });
                
    
    */}
    
    <PayPalScriptProvider >
    <PayPalButtons/>

    </PayPalScriptProvider>
    </div>
  
  );
  
}

export default Payment
