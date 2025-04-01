import React from 'react'
import { details } from '../exports'
import { Link, NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <section className='category-section'>
        <NavLink to={'/'}>
            <div>
                <img src={details.allFoods} alt="" width={'100px'} />
                <p>All</p>
            </div>
        </NavLink>
        <NavLink to={'/Biryani'}>
            <div>
                <img src={details.cb} alt="" width={'100px'} />
                <p>Biryani</p>
            </div>
        </NavLink>
        <NavLink to={'/Gravy'}>
            <div>
                <img src={details.gravy} alt="" width={'100px'} />
                <p>Gravy</p>
            </div>
        </NavLink>
        <NavLink to={'/Beverages'}>
            <div>
                <img src={details.beverages} alt="" width={'100px'} />
                <p>Beverages</p>
            </div>
        </NavLink>
        <NavLink to={'/Starters'}>
            <div>
                <img src={details.starters} alt="" width={'100px'} />
                <p>Starters</p>
            </div>
        </NavLink>
        <NavLink to={'/Sea Food'}>
            <div>
                <img src={details.seafood} alt="" width={'100px'} />
                <p>Sea Food</p>
            </div>
        </NavLink>
        <NavLink to={'/Chicken'}>
            <div>
                <img src={details.chicken} alt="" width={'100px'} />
                <p>Chicken</p>
            </div>
        </NavLink>
        <NavLink to={'/Dessert'}>
            <div>
                <img src={details.dessert} alt="" width={'100px'} />
                <p>Dessert</p>
            </div>
        </NavLink>
        <NavLink to={'/Appetizers'}>
            <div>
                <img src={details.appetizers} alt="" width={'100px'} />
                <p>Appetizers</p>
            </div>
        </NavLink>
        <NavLink to={'/Cool Scoops'}>
            <div>
                <img src={details.coolscoops} alt="" width={'100px'} />
                <p>Cool Scoops</p>
            </div>
        </NavLink>
        <NavLink to={'/Mojito'}>
            <div>
                <img src={details.mojito} alt="" width={'100px'} />
                <p>Mojito</p>
            </div>
        </NavLink>
    </section>
  )
}

export default Category