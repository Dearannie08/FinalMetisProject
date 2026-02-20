import React from 'react'
import {Mountain, Home, Waves, MountainSnow, Music, Castle, Sparkles, Droplets, Gem, Sailboat,Fish,  TreePine, ChevronRight, SlidersHorizontal} from "lucide-react"
 
function CategoryBar() {
  return (
    <div className='flex justify-around gap-6 p-6 '>
      <div className='flex flex-col  items-center'>
           <Mountain size={24}/>
           <span className='text-[12px] p-2'>Amazing Views</span>
           </div>
           <div className='flex flex-col items-center'>
           <Home size={24}/>
           <span className='text-[12px] p-2'>Cabins</span>
           </div>
           <div className='flex flex-col items-center'>
           <Waves size={24}/>
           <span className='text-[12px] p-2'>Beachfront</span>
           </div>
           <div className='flex flex-col items-center'>
           <MountainSnow size={24}/>
           <span className='text-[12px] p-2'>Skiing</span>
           </div>
           <div className='flex flex-col items-center'>
           <Music size={24}/>
           <span className='text-[12px] p-2'>Grand Piano</span>
           </div>
           <div className='flex flex-col items-center'>
           <Castle size={24}/>
           <span className='text-[12px] p-2'>Mansions</span>
           </div>
           <div className='flex flex-col items-center'>
           <Sparkles  size={24}/>
           <span className='text-[12px] p-2'>OMG!</span>
           </div>
           <div className='flex flex-col items-center'>
           <Droplets size={24}/>
           <span className='text-[12px] p-2'>Amazing pools</span>
           </div>
           <div className='flex flex-col items-center'>
           <Gem size={24}/>
           <span className='text-[12px] p-2'>Luxe</span>
           </div>
           <div className='flex flex-col items-center'>
           <Sailboat size={24}/>
           <span className='text-[12px] p-2'>Boat</span>
           </div>
           <div className='flex flex-col items-center'>
           <Fish size={24}/>
           <span className='text-[12px] p-2'>Lakefront</span>
           </div>
           <div className='flex flex-col items-center'>
           <TreePine size={24}/>
           <span className='text-[12px] p-2'>Treehouses</span>
           </div>
           <div className='border-1 h-6 w-6 rounded-full items-center '>
           <ChevronRight size={23}/>
        </div>
        <div className='flex items-center w-20 border p-3 gap-2 rounded-xl'>
          <SlidersHorizontal size={24}/>
          <span className='text-[12px] '>Filters</span>
        </div>
    </div>
  )
}

export default CategoryBar
