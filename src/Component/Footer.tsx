import React from 'react'
import { useState } from 'react'

function Footer() {
  const [showMap, setShowMap] = useState (false);
  return (
    <div className='bg-gray-200  border-gray-200 w-full p-6 '>
      
      <h2 className='font-bold'>Inspiration for future gataways</h2>
      <div>
        <ul className='flex gap-5 text-gray-500 text-sm mt-6'>
          <li className='text-black font-bold'>Popular</li>
          <li>Historic</li>
          <li>Coastal</li>
          <li>Iceland</li>
          <li>Lake</li>
          <li>Unique stay</li>
          <li>Category</li>
          <li>Things to do</li>
        </ul>
        <hr className='border-gray-300 my-6'   /> 

      </div>
      <div className=' grid grid-cols-6 gap-6 text-sm'>
        <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Holiday rental</p>
        </div>


       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Flat rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Villa rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Flat rental</p>
        </div>

       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Cottage rental</p>
        </div>
       <div>
          <p>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Flat rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Cottage rental</p>
        </div>

       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Holiday rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Flat rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Holiday rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Villa rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Holiday rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Flat rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>House rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Holiday rental</p>
        </div>
       <div>
          <p className='font-bold'>Aberfeldy</p>
          <p className='text-gray-500 text-[12px]'>Holiday rental</p>
        </div>
       <div>
          <p className='font-bold'>Show more</p>
          </div>
          </div>
          <hr className='border-gray-300 my-6' />
        <footer>
        <div className='grid grid-cols-3 gap-8 mt-10 text-sm'>
          <div className=''>
            <h2 className='font-bold mb-4'>Support</h2>
            <ul className='space-y-3 text-sm text-gray-500'>
              <li>Help center</li>
             <li>Air cover</li>
             <li>Anti discrimination</li>  
             <li>Disability support</li>         
             <li>Cancilation option</li>  
             <li>Report neighbourhood concern</li>       
           </ul>
          </div>
          <div>
            <h2 className='font-bold mb-4'>Hosting</h2>
            <ul className='space-y-3 text-sm text-gray-500'>
              <li>Airbnb your home</li>
             <li>Aircover for hosts</li>
             <li>Hosting resources</li>
             <li>Community forum</li>
             <li>Hosting responsibly</li>
             </ul>
          </div>
          <div>
            <h2 className='font-bold mb-4'>Airbnb</h2>
            <ul className='space-y-3 text-sm text-gray-500'>
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Gift cards</li>
              <li>Airbnb.org emergency stay</li>


            </ul>
          </div>
        </div>
        <div className=''>
          <hr className='border-gray-300 my-6' />
          <div className='flex justify-center mb-15'>
          <button className='bg-black text-white px-6 py-2 rounded-full text-sm flex justify-center items-center ' onClick={() => setShowMap(!showMap)} >
            Show map
          </button>
          {showMap && (
            <div className='map-container  inset-0 bg-white  mt-4 w-full h-64 border-rounded'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2822602308834!2d7.065756899999999!3d6.2264668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043828d76ceaa25%3A0x3d486d52e1db9520!2sCosmila%20Suites%20and%20Hotels!5e0!3m2!1sen!2sng!4v1771587965589!5m2!1sen!2sng" 
            width="600" 
            height="450"
             style={{border:0}}
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
           </iframe>
            </div>
          )}
          <button onClick={() => setShowMap(!showMap)} className='fixed z-50 bottom-6 left-1/2 -translate-x-1/2 bg-black text-whitepx-6 py-3 rounded-full text-sm '>
            
          </button>
          </div>
        </div>
       
 
   </footer>
      
    </div>
  )
}

export default Footer