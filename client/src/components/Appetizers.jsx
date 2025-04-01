import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../Context';
import axios from "axios";
import { details } from '../exports';

const Appetizers = () => {
  const [gravy, setGravy] = useState([]);
  const { selectedFood, setSelectedFood, setUserFoods, setTotalCost,setFoodCount } = useContext(AppContext);

  useEffect(() => {
    axios.get('http://localhost:8000/Appetizers')
    .then(result => {
      setGravy(result.data);
      console.log(result.data);
    })
    .catch(err => console.log(err));
  }, []);

  const birEl = gravy.map((element, index) => {
    return (
      <main className='main' key={element._id}>
        <div className='food-item' key={element._id} style={element.available ? {} : {zIndex: '-1'}}>
            <img className={element.available ? 'available-image' : 'not-available-image'} src={element.image} alt="" />
            <div className='food-details' style={element.available ? {} : {opacity: '0.6'}}>
                <p>{element.name}</p>
                <p className='price'>Price: {element.price}/-</p>
            </div>
            <div className='cart-button'>
                {/* <div className='cart-increment'>
                    <button className='decrement'>-</button>
                    <span>0</span>
                    <button className='increment'>+</button>
                </div> */}
                {element.available && <div>
                    <p>Available: <span className={element.available ? 'available' : 'not'}>{element.available ? "✓" : "X"}</span></p>
                </div>}

                {element.available ? 
                    <button className={ selectedFood.some(item => item.id == element._id) ? 'added' : 'add' } onClick={() => {
                        setSelectedFood(prev => [...prev, {name:element.name, price:element.price, id:element._id, added:true}]);
                        setUserFoods(prev => [...prev, element.name]);
                        setTotalCost(prev => [...prev, Number(element.price)]);
                        setFoodCount(prev => prev + 1);
                    }}>
                        <img src={details.addcart} alt="" />
                        { selectedFood.some(item => item.id == element._id) ? 'Added ✓' : 'Add Cart'}
                    </button>
                    :
                    <button className='not-available-button'>
                        Not Available
                    </button>
                }

            </div>
        </div>
      </main>
    )
  })

  return (
    <>
      {birEl}
    </>
  )
}

export default Appetizers