import React from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

const Login = ({isLogin, setisLogin}) => {
  return (
    <>
    { isLogin
     ? 
     <><UserGreeting isLogin={isLogin} setisLogin={setisLogin} /> </>
      : 
    <> <GuestGreeting isLogin={isLogin} setisLogin={setisLogin}/></>}
    </>
  )
}

export default Login