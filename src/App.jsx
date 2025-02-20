import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutOne from './layout/LayoutOne'
import Home from './Pages/Home/Home'
import Error404 from './Pages/404/Error404'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutOne/>}/>
          <Route index element={<Home/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App