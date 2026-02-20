import React from 'react'
import image from '../assets/Frame 6 1.png'
import pool  from '../assets/Frame 6 2.png'
import piller from '../assets/Frame 6 3.png'
import bay from '../assets/Frame 6 4.png'
import house from '../assets/Frame 6 5.png'
import land from '../assets/Frame 6 6.png'
import tree  from '../assets/Frame 6 7.png'
import lan from '../assets/Frame 6 8.png'
import seat from '../assets/Frame 6 9.png'
import sky from '../assets/Frame 6 10.png'
import sit from '../assets/Frame 6 11.png'
import sea from '../assets/Frame 6 12.png'
import fing from '../assets/Frame 6 13.png'
import air from '../assets/Frame 6 14.png'
import sun from '../assets/Frame 6 15.png'
import environs from '../assets/Frame 6 16.png'
import gas from '../assets/Frame 6 17.png'
import kettle from '../assets/Frame 6 18.png'
import jug from '../assets/Frame 6 19.png'
import spoon from '../assets/Frame 6 20.png'
import {Star, StarIcon} from 'lucide-react'
function Layout() {
    // const images = [image, pool, piller, bay]
    const listings =[ 
        {
            imgs: image,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
           rating: "5.0"
    },
    {
      imgs: pool,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
           rating: "5.0"
    },
    {
      imgs: piller,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"

            
    },
    {
        imgs: bay,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"
    }]
        const highlights =[ 
    {
            imgs: house,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
           rating: "5.0"
    },
    {
      imgs: land,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
           rating: "5.0"
    },
    {
      imgs: tree,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
             rating: "5.0"
    },
     {
            imgs: lan,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
             rating: "5.0"
        }]
        const property =[ 
        {
            imgs: seat,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
              rating: "5.0"           

    },
    {
      imgs: sky,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"

    },
    {
      imgs: sit,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
          rating: "5.0"      
    },
     {
        imgs: sea,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"
            
    }]
       const comodity =[ 
        {
            imgs: fing,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"

    },
    {
      imgs: air,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"

    },
    {
      imgs: sun,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
             rating: "5.0"
    },
     {
        imgs: environs,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"
    }]
    const appliance =[ 
        {
            imgs: gas,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"

    },
    {
      imgs: kettle,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"

    },
    {
      imgs: jug,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating:  "5.0"
    },
    {
        imgs: spoon,
            title:"Half Moon Bay, Carlifonia US",
            desc:"Beach and Ocean Views",                                                                  
            date:"22-27 Oct Individual Host",
            price: "E1,634 total",
            rating: "5.0"
    }]
  return (
    <div className='flex flex-wrap justify-around g p-2'>
        
        {listings.map((item, index) => (
            <div key={index}>
            <img src={item.imgs} alt="" className='hover:scale-105' />

             <div className='p-1 ml-4'>
              <span className='flex gap-1'> 
             <p><b>{item.title}</b></p>
             <div className=' flex ml-4'>
             <StarIcon size={20}/>
             <span className='text-small'>{item.rating}</span>
             </div>
             </span>
             
             <p>{item.desc}</p>
             <p>{item.date}</p>
             <p>{item.price}</p>
             
             </div> 
                
        </div>
            ))}
           
          {highlights.map((item, index) => (
            <div key={index}>
            <img src={item.imgs} alt="" className='hover:scale-105'/>
            

             <div className='p-1 m-4'>
                <span className='flex gap-1'> 
             <p><b>{item.title}</b></p>
             <div className=' flex ml-3'>
             <StarIcon size={20}/>
             <span className='text-small'>{item.rating}</span>
             </div>
             </span>
             
             <p>{item.desc}</p>
             <p>{item.date}</p>
             <p>{item.price}</p>
             </div> 
                
        </div>
            ))}

            {property.map((item, index) => (
            <div key={index}>
            <img src={item.imgs} alt="" className='hover:scale-105' />
            
             <div className='p-1 m-4'>
             <span className='flex gap-1'> 
             <p><b>{item.title}</b></p>
             <div className=' flex ml-3'>
             <StarIcon size={20}/>
             <span className='text-small'>{item.rating}</span>
             </div>
             </span>
             <p>{item.desc}</p>
             <p>{item.date}</p>
             <p>{item.price}</p>
             </div> 
                
        </div>
            ))}
             {comodity.map((item, index) => (
            <div key={index}>
            <img src={item.imgs} alt="" className='hover:scale-105' />
             <div className='p-1 m-4'>
             <span className='flex gap-1'> 
             <p><b>{item.title}</b></p>
             <div className=' flex ml-3'>
             <StarIcon size={20}/>
             <span className='text-small'>{item.rating}</span>
             </div>
             </span>
             <p>{item.desc}</p>
             <p>{item.date}</p>
             <p>{item.price}</p>
             </div> 
                
        </div>
            ))}
            {appliance.map((item, index) => (
            <div key={index}>
            <img src={item.imgs} alt="" className='hover:scale-105' />
             <div className='p-1 m-4'>
             <span className='flex gap-1'> 
             <p><b>{item.title}</b></p>
             <div className=' flex ml-3 '>
             <StarIcon size={20}/>
             <span className='text-small'>{item.rating}</span>
             </div>
             </span>
             <p>{item.desc}</p>
             <p>{item.date}</p>
             <p>{item.price}</p>
             </div> 
             
        </div>
         ))}
         <div className='flex flex-col items-center  mt-10'>
            <p><b>Continue exploring amazing views</b></p>
                
        <button className='text-white bg-black border-2 px-6 py-2 rounded-xl'> Show more</button> 
                </div>                       
    </div>
    
  );
}

export default Layout