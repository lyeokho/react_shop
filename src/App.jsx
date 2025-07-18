
import data from './mokData'  //불러올때 필수
import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/mainpage'
import Header from './components/Header'


function App() {
  const[fruit, setFruit]=useState(data);
  

  return (

    <div>
      <Header />
    
      <Routes>
        <Route path='/' element={<MainPage fruit={fruit}/>} />
        <Route path='/test' element={<h1>테스트페이지</h1>} /> 
      </Routes>

    </div>

  )
}

export default App
