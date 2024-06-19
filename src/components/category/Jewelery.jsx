import React, { useContext } from 'react'
import { FakeStore } from '../../App2'

const Jewelery = () => {
    const context = useContext(FakeStore)
  return (
    <>
    <div>
        {context.products.filter(item=> item.category == "jewelery")
        .map((item,index) =>{
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
        } ) }
    </div>
    </>
  )
}

export default Jewelery