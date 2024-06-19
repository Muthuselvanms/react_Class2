import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FakeStore } from '../App2'

const Navbar = () => {
   const context =  useContext(FakeStore)
   // context = {products,setproducts,cart,setcart,cartValue,setcartValue}
  return (
    <>
        <nav className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Product</Link></li>
                <li><Link to='/cart'>Cart : {context.cartValue} </Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar