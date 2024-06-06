import React, { useState } from 'react'

const Vote = () => {
    // age
    const [age, setage] = useState("")
    const [message, setmessage] = useState("")

    // odd even
    const [number, setnumber] = useState("")
    const [oddEvenMesg, setoddEvenMesg] = useState("")


    const handleCheck = () =>{
        // if(age>=18){
        //     setmessage("u r eligible to vote")
        // }
        // else{
        //     setmessage("u r not eligible to vote")
        // }
        (age>=18 ? setmessage("u r eligible to vote") : setmessage("u r not eligible to vote"))
    }

    const handleOddEven = () =>{
        (number%2==0 ? setoddEvenMesg("Even Number") : setoddEvenMesg("Odd Number"))
    }
  return (
    <>
    <h2>Vote Calculator</h2>
    <input type="number"  onChange={(e)=>setage(e.target.value)}  />
    <button onClick={handleCheck}>Check</button>
    <h4>Entered Age : {age}</h4>
    <p>ur result : {message}</p>
    <hr />

    <h2>ODD OR EVEN </h2>
    <input type="number"  onChange={(e)=>setnumber(e.target.value)}  />
    <button onClick={handleOddEven}>Check</button>
    <h4>Entered Number : {number}</h4>
    <p>ur result : {oddEvenMesg}</p>
    </>
  )
}

export default Vote