import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import {details} from '../exports.jsx'

const FinalPayment = () => {
    const { tableNo, selected, grandTotal, setSelectedFood, setTotalCost, setGrandTotal, setUserFoods  } = useContext(AppContext);
    console.log(tableNo);
    const navigate = useNavigate();

    useEffect(() => {
        axios.put('http://localhost:8000/payment/'+tableNo, {newString:selected, cost:grandTotal})
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

    }, []);

    return (
        <>
            <section className='final-payment-counter'>
                <Link to={'/'} onClick={() => {
                    setSelectedFood([{}]);
                    setTotalCost([0]);
                    setGrandTotal(0);
                    setUserFoods([]);
                }}>
                    <img src={details.cross} alt="" width={"30px"} className='exit' />
                </Link>
                <div>
                    <img src={details.sucess} alt="" width={"90px"} />
                </div>
                <div>
                    <h1>Order Placed!</h1>
                    <p>Hurry! Your order was placed.. Served Soon..</p>
                </div>
                <div>
                    <p>Payment</p>
                    <p>At Counter</p>
                    <p>Total : <span>₹{ grandTotal }</span></p>
                </div>
                <p>Redirected Soon..</p>
            </section>
        </>
    )
}

export default FinalPayment