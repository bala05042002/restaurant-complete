import React, { useContext, useEffect, useState } from 'react';
import { details } from '../exports.jsx';
import { AppContext } from '../Context.jsx';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

const Search = () => {
  const { tableNo } = useContext(AppContext);
  console.log(tableNo);
  const [ query, setQuery ] = useState('');
  const [foodDetails, setFoodDetails] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const { selectedFood, setSelectedFood, setUserFoods, setTotalCost,setFoodCount, totalCost } = useContext(AppContext);

  const fetchResults = (searchQuery) => {
    axios.post('https://restaurant-backend-tcek.onrender.com/search', { query: searchQuery })
    .then(result => {
      setFoodDetails(result.data);
    })
    .catch(err => console.log(err));
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if(typingTimeout) {
      clearTimeout(typingTimeout)
    }
    fetchResults(value);

    setTypingTimeout(
      setTimeout(() => {
      })
    )
  }

  const allFoodEl = foodDetails.map(element => {
      return (
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
        )
      })

  return (
    <section className='search-page'>
        <div>
          <Link to={'/'}>
            <img className='backbutton' src={details.left} alt="" width={'20px'} />
          </Link>
          <h2>Search</h2>
        </div>
        <form action="" className='search-page-form'>
          <div>
            <img className='search' src={details.search} alt="" width={'25px'} />
            <input type="text" autoFocus name='search' placeholder='Search any dish' onChange={handleInputChange} />
          </div>
        </form>

        <main className='main'>
            {allFoodEl}
        </main>
    </section>
  )
}

export default Search
