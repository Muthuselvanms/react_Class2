// import React from 'react'

// const Home3 = ({name}) => {
//   return (
//     <div>
//     <h1>Home Three</h1>
//     <h2>My name is {name} </h2>
//     </div> 
//      )
// }

// export default Home3

import React, { useContext } from 'react'
import { NameContext } from '../App'

const Home3 = () => {
    const  name= useContext(NameContext)
  return (
    <div>
    <h1>Home Three</h1>
    <h2>My name is {name}</h2>
    </div> 
     )
}

export default Home3