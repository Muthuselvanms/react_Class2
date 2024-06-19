import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product'
import Cart from './components/Cart'
import axios from 'axios'
import './App.css'
import Men from './components/category/Men'
import Women from './components/category/Women'
import Electronics from './components/category/Electronics'
import Jewelery from './components/category/Jewelery'

const url = "https://fakestoreapi.com/products"
export const FakeStore = createContext()

const App2 = () => {
    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])
    const [cartValue, setcartValue] = useState(cart.length)

    const getData = async() =>{
        try {
            const response = await axios.get(url)
            setproducts(response.data); //  response =  {data,config,...}
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData()
    },[])

    
    // console.log(products);

  return (
    <FakeStore.Provider value={{products,setproducts,cart,setcart,cartValue,setcartValue}}>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/men' element={<Men/>} />
            <Route path='/women' element={<Women/>} />
            <Route path='/electronics' element={<Electronics/>} />
            <Route path='/jewelery' element={<Jewelery/>} />
            <Route path='/products' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
        </BrowserRouter>
    </FakeStore.Provider>
  )
}

export default App2