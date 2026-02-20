import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav'
import View from './Component/CategoryBar'
import CategoryBar from './Component/CategoryBar'
import Layout  from './Component/Layout'
import Footer from './Component/Footer'

function App() {

  return (
   <div>
    {/*<p className='bg-red-400 text-white text-2xl italic underline font-bold'>Testing</p> */}
    <Nav/>
    <CategoryBar/>
    <Layout/>
    <Footer/>
   </div>
  )
}

export default App
