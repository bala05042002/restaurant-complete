import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Home from './Home.jsx';
import Biriyani from "./components/Biriyani.jsx";
import Payment from './components/Payment.jsx';
import ContextProvider from './Context.jsx';
import FinalPayment from './components/FinalPayment.jsx';
import Gravy from './components/Gravy.jsx';
import Beverages from './components/Beverages.jsx';
import Starters from './components/Starters.jsx';
import Seafood from './components/Seafood.jsx';
import PaymentCreate from './components/PaymentCreate.jsx';
import Chicken from './components/Chicken.jsx';
import Dessert from './components/Dessert.jsx';
import Appetizers from './components/Appetizers.jsx';
import CoolScoops from './components/CoolScoops.jsx';
import Mojito from './components/Mojito.jsx';
import Search from './components/Search.jsx';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/Biryani' element={<Biriyani />} />
            <Route path='/Gravy' element={<Gravy />} />
            <Route path='/Beverages' element={<Beverages />} />
            <Route path='/Sea Food' element={<Seafood />} />
            <Route path='/Starters' element={<Starters />} />
            <Route path='/Chicken' element={<Chicken />} />
            <Route path='/Dessert' element={<Dessert />} />
            <Route path='/Appetizers' element={<Appetizers />} />
            <Route path='/Mojito' element={<Mojito />} />
            <Route path='/Cool Scoops' element={<CoolScoops />} />
          </Route>
          <Route path='/Search' element={<Search />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment/create' element={<PaymentCreate />} />
          <Route path='/payment/:id' element={<FinalPayment />} />
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App