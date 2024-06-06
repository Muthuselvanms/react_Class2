import { createContext, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Vote from './pages/Vote';
import Home1 from './context/Home1';

export const NameContext = createContext()

function App() {
  const [isLogin, setisLogin] = useState(false)

  const [name, setname] = useState("Dhoni")


  return (
  //  <>
  //  <Vote/>
  //  <Login isLogin={isLogin} setisLogin={setisLogin}/>
  //  {/* props drilling */}
  //  <Home1 name={name}/>
  //  </>

  <NameContext.Provider value={name}>
    <Home1/>
  </NameContext.Provider>

  );
}

export default App;
