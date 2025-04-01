import React, { useContext, useEffect, useState } from 'react'
import { details } from '../exports';
import Search from './Search';
import Category from './Category';
import { AppContext } from '../Context';
import { NavLink, Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const { foodCount, tableNo, setUserName, setTableNo, setTableSelected, tableSelected, totalCost } = useContext(AppContext);
    const [nav, setNav] = useState(false);
    
    // const userName = window.prompt('Enter your Name:');
    // const table = window.prompt('Enter your Table Number:');
    return (
        <>
            <div className={tableSelected ? 'table-select-container-selected' : 'table-select-container'}>
                <form className='table-selection' onSubmit={(e) => {
                    e.preventDefault();
                    setTableSelected(!tableSelected);
                }}>
                    <label htmlFor="table">Your Table No</label>
                    <input id='table' type="number" autoFocus name='tableno' placeholder='Table No' onChange={(e) => {
                        setTableNo(Number(e.target.value));
                    }} />
                    <button>Submit</button>
                </form>
            </div>
            <header className='header'>
                <div className='details'>
                    <div className='table-select'>
                        <img src={details.restuarant} alt="" />
                        <p>{tableNo}</p>
                    </div>
                    <div>
                        <h1>Malathi Restuarant</h1>
                        <p>Bus Stand, Kumbakonam</p>
                    </div>
                </div>

                <NavLink to={'/payment'}>
                    <div className='cart' onClick={() => {setNav(!nav)}}>
                        <img src={details.dining} alt="" />
                        <p>{totalCost.length-1}</p>
                    </div>
                </NavLink>
            </header>

            <Link to={'/search'} style={{color:'black', textDecoration:'none'}}>
                <form action="" className='search'>
                    <img src={details.search} alt="" />
                    <input type="text" name='search' placeholder='Search any dish' />
                </form>
            </Link>

            <Category />
        </>
    )
}

export default Header