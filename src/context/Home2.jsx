// import React from 'react'
// import Home3 from './Home3'

// const Home2 = ({name}) => {
//   return (
//     <div>
//     <h1>Home Two</h1>
//     <Home3 name={name}/>
//     </div>
//   )
// }

// export default Home2

import React, { useContext } from 'react'
import Home3 from './Home3'
import { NameContext } from '../App'

const Home2 = () => {
   const name  =  useContext(NameContext)
  return (
    <div>
    <h1>Home {name}</h1>
    <Home3 />
    </div>
  )
}

export default Home2