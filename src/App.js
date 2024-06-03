
import React from 'react'
import "./App.css";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import Page from './component/calculator'

export default function page(){
return (
 <BrowserRouter>
<Routes>
  <Route path='/' index element={<Home/>}></Route>
  <Route path='/calculator' element={<Page/>}></Route>
  
</Routes>

</BrowserRouter>
    
  )
}

