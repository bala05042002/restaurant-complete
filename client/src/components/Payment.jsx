import React, { useContext, useEffect, useState } from 'react'
import { details } from '../exports';
import { AppContext } from '../Context';
import {Link} from "react-router-dom";
import Razorpay from 'razorpay';
import axios from 'axios';

const Payment = () => {
  const { selectedFood, setSelectedFood,userName, tableNo, setGrandTotal, grandTotal, totalCost, setTotalCost, setUserFoods, selected } = useContext(AppContext);
  const [gstRate, setGstRate] = useState(6);
  console.log(totalCost)

  const total = totalCost.reduce((sum, curr) => sum + curr);

  const gst = (total * gstRate) / 100;
  setGrandTotal(gst+total);

  const handleDeleteItem = (id, iName) => {
    const filterItems = selectedFood.filter(item => id != item.id);
    setSelectedFood(filterItems);
    setTotalCost(prev => {
      const newArray = [...prev];
      newArray.pop();
      return newArray;
    })
    const userFoodDelete = selected.filter((ele, index) => index != iName);
    console.log(userFoodDelete)
    setUserFoods(userFoodDelete)
  }

  const billEl = selectedFood.slice(1).map((element, index) => {
    return (
      <div className='menu' key={index}>
          <p>
            <img src={details.menuIcon} alt="" />
            {element.name}
          </p>
          <p className='price'>Price:<span style={{color: 'green', fontWeight:"bold"}}>{element.price}/-</span></p>
          <p onClick={() => {
            handleDeleteItem(element.id, index)
          }}>Remove</p>
        </div>
    )
  })

  return (
      <section className='payment-selection'>
        <Link to={"/"}>
          <button>
            <img src={details.left} alt="" width={"20px"} />
          </button>
        </Link>

        <h1 className='menu'>CART</h1>

        {totalCost.length < 2 && 
          <div className='no-items-selected'>
            <p>No Items Selected..<span>😒</span></p>
          </div>
        }
        {billEl}

        <h3>Bill Summary</h3>

        <div className='summary'>
          <div>
            <p>
              <img src={details.table} alt="" width={"30px"} />
              Item total
            </p>
            <p>{total}/-</p>
          </div>
          <div>
            <p>
              <img src={details.bank} alt="" width={"30px"} />
              GST+Taxs
            </p>
            <p>{gst}/-</p>
          </div>
          <p className='grand'>Grand Total: <span>{grandTotal}/-</span></p>
        </div>

        <section className='payment'>
          <Link to={"/payment/"+tableNo}>
            <div className='payatcounter'>
              <h1>PAY ON COUNTER</h1>
              <div>
                <img src={details.counter} alt="" width={"35px"} />
                <h2>Pay on counter</h2>
              </div>
            </div>
          </Link>

          <div className='payatcounter'>
            <h1>PAY ONLINE</h1>
              <div>
                <Link to={'/payment/create'}>
                  <img src={details.online} alt="" width={"35px"} />
                  <h2>Pay Online</h2>
                </Link>
              </div>
          </div>
        </section>
      </section>
   )
}

export default Payment