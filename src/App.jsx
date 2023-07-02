import {Routes,Route} from 'react-router-dom';

import Home from "./routes/home/home.component"
import Navbar from './routes/navigation/navbar.component';
import SignIn from './routes/sign-in/sign-in.component';
import './App.scss'

const Shop=()=>{
  return(
    <h1>i am shop </h1>
  )
}

function App() {

  return (

    <Routes>  
      <Route path='/' element={<Navbar/>} >
      <Route index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='signIn' element={<SignIn/>}/>

      </Route>
      
    </Routes>

    
      
  )
}

export default App
