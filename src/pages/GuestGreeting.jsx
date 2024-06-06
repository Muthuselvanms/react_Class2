
function GuestGreeting({isLogin, setisLogin}) {
    return (
        <>
        <h1>Welcome - You are Guest User Please Login</h1>
        <button onClick={()=>setisLogin(true)} >Login</button>
        </>
    )
}
export default GuestGreeting