function UserGreeting({isLogin, setisLogin}) {
    return (
        <>
        <h1>Welcome back! - ADMIN</h1>
        <button onClick={()=>setisLogin(false)}>Logut</button>
        </>
    )
   
}
export default UserGreeting