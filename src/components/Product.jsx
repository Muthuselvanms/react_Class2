import React, { useContext } from 'react'
import { FakeStore } from '../App2'

const Product = () => {
    const context = useContext(FakeStore)
    // context = {products,setproducts,cart,setcart,cartValue,setcartValue}
   
    return (
    <>
    <div>
        <h2>All Products</h2>
        {context.products.map((item,index)=>{
            return (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} height={150} width={150} />
                    <h4>Description : {item.description}</h4>
                    <h4>Rating : {item.rating.rate}</h4>
                    <h4>Available Count : {item.rating.count}</h4>
                    <h3>Price : {item.price}</h3>
                    <button 
                    onClick={()=>{
                        context.cart.unshift(item)
                        context.setcartValue(context.cart.length)
                    }
                    }
                    >Add to Bag</button>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Product