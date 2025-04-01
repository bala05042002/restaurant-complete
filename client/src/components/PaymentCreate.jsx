import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context';

const PaymentCreate = () => {
  const { selectedFood, setSelectedFood,userName, tableNo, setGrandTotal, grandTotal, totalCost, setTotalCost, setUserFoods, selected } = useContext(AppContext);

  const [ razorID, setRazorID ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const options = {
          key:"rzp_test_pERgia1E9woobt",
          key_secret: "c0SJnEhPzhX1GQlGo0jz1x6r",
          amount: grandTotal * 100,
          currency: "INR",
          name: "Malathi Restuarant",
          description: "For testing purpose",
          handler: function(response){
            setRazorID(response.razorpay_payment_id);
          },
          prefill: {
            name:"Balakrishnan",
            email:"19cad216@gmail.com",
            contact:"6382028774"
          },
          notes:{
            address:"Razorpay Corporate Office"
          },
          theme: {
            color:"#3399cc"
          }
        };
    
        const pay = new window.Razorpay(options);
        pay.open();

        setTimeout(() => {
          navigate('/');
          setSelectedFood([{}]);
          setTotalCost([0]);
          setGrandTotal(0);
          setUserFoods([]);
        }, 1000);

        axios.put('https://restaurant-backend-tcek.onrender.com/payment/'+tableNo, {newString:selected, cost:grandTotal})
        .then(result => {
            console.log(result);
            setTimeout(() => {
                navigate('/');
                setSelectedFood([{}]);
                setTotalCost([0]);
                setGrandTotal(0);
                setUserFoods([]);
            }, 10000)
        })
        .catch(err => console.log(err));
  }, []) 
  return (
    <div>
      <p>Online Payment GateWay</p>
    </div>
  )
}

export default PaymentCreate
