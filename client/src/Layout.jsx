import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import ContextProvider from './Context'

const Layout = () => {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout