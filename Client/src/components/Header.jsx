import React from 'react'
import logo from '../assets/images/logo.svg'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className=' mb-[56px] flex place-content-between items-center'>
        <img src={logo} alt="Logo" />
        <NavBar/>
    </header>
  )
}
