import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='home-container'>
      <Link to="/men">
      <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" height={100} width={100} />
      <h4>Men</h4>
      </Link>
      <Link to="/women">
      <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" height={100} width={100} />
      <h4>Women</h4>
      </Link>
      <Link to="/electronics">
      <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" height={100} width={100} />
      <h4>Electronics</h4>
      </Link>
      <Link to="/jewelery">
      <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" height={100} width={100} />
      <h4>Jewelery</h4>
      </Link>
    </div>
    </>
  )
}

export default Home