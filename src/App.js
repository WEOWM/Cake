import React from 'react'
import Home from './Home'
import './App.css'
import Produtscart from './Pages/Carting/Produtscart'
import { Route,Routes } from 'react-router-dom'
import data from "./Data/data.json"


const App = () => {

const {id} = data
  return (
    <div>
     
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path={`/product/${id}`} element={<Produtscart/>} />
     </Routes>
    

    </div>
  )
}

export default App
