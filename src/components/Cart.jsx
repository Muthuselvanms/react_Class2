import React, { useContext, useEffect, useState } from 'react'
import { FakeStore } from '../App2'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const context = useContext(FakeStore)
  // context = {products,setproducts,cart,setcart,cartValue,setcartValue}

  const [total, settotal] = useState(0)

  const nav = useNavigate()

  useEffect(()=>{
    const newTotal = context.cart.reduce((sum,item)=>{
      return  sum + item.price
    },0)
    settotal(newTotal.toFixed(2));
  }, [context.cart])

  const handleClear = () =>{
    context.setcart([])
    context.setcartValue(0)
  }

  // const handleRemove = (item) =>{
  //     const indexToRemove = context.cart.findIndex( product=> product == item)
  //     // console.log(indexToRemove);

  //     if(indexToRemove !== -1){
  //       const updatedCart = [...context.cart]
  //       updatedCart.splice(indexToRemove,1)

  //       context.setcart(updatedCart)
  //       context.setcartValue(updatedCart.length)
  //     }
  // }

  const handleRemove = (index) =>{
        const updatedCart = [...context.cart]
        updatedCart.splice(index,1)

        context.setcart(updatedCart)
        context.setcartValue(updatedCart.length)
  }

  const handleBuy = () =>{
    alert("your order is placed")
    context.setcart([])
    context.setcartValue(0)
    nav('/')
  }

  return (
    <>
    <div>
      {context.cart.length > 0 
      ? 
      <>
      <button onClick={handleClear}>Clear Cart</button>
      <h1>Your have ordered</h1>
      <div>
        {context.cart.map((item,index)=>{
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <img src={item.image} alt={item.title} height={150} width={150} />
              <h3>Price : {item.price}</h3>
              {/* <button onClick={()=>handleRemove(item)}>Remove from Cart</button> */}
              <button onClick={()=>handleRemove(index)}>Remove from Cart</button>
            </div>
          )
        })}
        <h2>Total Amount : {total}</h2>
        <button onClick={handleBuy}>Buy Now</button>
      </div>
      </> 
      : 
      <>
      <h1>Your Cart is Empty</h1>
      <Link to='/products'>Go to Products Page</Link>
      </>}
    </div>
    </>
  )
}

export default Cart