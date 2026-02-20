import  { useState } from 'react'
import airbnb from '../assets/airbnb logo.png'
import {Menu, User, Search} from "lucide-react"
import { FaFacebook, FaApple, FaGoogle, FaEnvelope} from "react-icons/fa"
import { X } from 'lucide-react'

function Nav() {
  const [open, setOpen] =useState(false)
  const [showModal, setShowModal] =useState(false)
  
  return (
    <div className=' border-1 p-3 bg-white border-gray-200'>
        <nav className='flex justify-around gap-6 p-4 '>
        
        <div>
            
                <img src={ airbnb}alt="" />
                </div>
            
            
           <div className='flex gap-6 border border-gray-200 rounded-full p-2'> 
         
          
        <span className='font-bold'>Anywhere</span>
        <span className='h-7 border-1 border-gray-300'></span>
            <span className='font-bold'>Any week</span>
            <span className='h-7 border-1 border-gray-300'></span>
            <span>Add guest</span>
            
            <div className='rounded-full bg-red-500 p-3'>
            <Search size={15}/>
            </div>
            </div>
            
          
            <div className='flex gap-6'>
            
             <span>Airbnb your home </span>
            <span>🌐</span>
            
            </div>
           
           <div className='flex gap-4 border border-gray-200 p-2 h-8 rounded-full'>
            <Menu size={18}/>
            <User size={18} className='bg-gray-500 rounded-full cursor pointer  relative' onClick={()=> setOpen(!open)}/>
            {open &&(
              <ul className='absolute right-0 mt-5 bg-white rounded-lg p-2'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor pointer'>Messages</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor pointer'>Trips</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor pointer'>Wishlist</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor pointer'>Manage Listing</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor pointer'>Account</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor pointer'>help center</li>
                <button onClick={()=> setShowModal(true)} className='px-4 py-2 hover:bg-gray-100 cursor pointe'>
                  Login
                </button>
              </ul>
              
            )}
            </div>
            
          
          
              {showModal &&(
          <div className='absolute right-0 top-12 w-120 bg-white rounded-xl border-white border-2 p-4'>
            <button>
            < X size={20} onClick={() => setShowModal(false)}/>
            </button>
           <p className='text-center font-bold'>Login or Sign in </p>
           <p className=' h-px bg-gray-300 mt-4'></p>
           <p className='text-2xl mt-10'><b> Welcome to Airbnb</b></p>
           
           <form>
            
          <input
          type='email'
          placeholder='email'
          className='border w-full p-3 rounded-lg'
          />
          <button className='bg-pink-500 w-full border rounded-lg text-white p-3 mt-3 '>Continue</button>
          <div className='flex items-center gap-3 mt-4'>
          <div className='flex-1 h-px bg-gray-300'></div>
            <span className='px-3 text-sm text-gray-400'>or</span>
            <div className='flex-1 h-px bg-gray-300'></div>
          
          </div>
          <button className='flex justify-center border w-full p-3 rounded-lg gap-20 mt-15 '>
            <FaFacebook size={20} className='text-blue-600'/>
            Continue with facebook
          </button>
          <button className='flex justify-center border w-full p-3 rounded-lg gap-24 mt-3 '>
            <FaGoogle size={20} className='text-red-500 '/>
            Continue with Google
          </button>
          <button className='flex justify-center border w-full p-3 rounded-lg gap-24 mt-3'>
            <FaApple size={20}/>
            Continue with Apple
          </button>
          <button  className='flex justify-center border w-full p-3 rounded-lg gap-24 mt-3'>
            <FaEnvelope size={20}/>
            Continue with Mail
          </button>
           </form>
          </div>
        )}

            
           
          
               
        
       </nav> 
    </div> 
  )
}

export default Nav
