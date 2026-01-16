import React from 'react'
import Video from '../components/home/Video'
import HeroText from '../components/home/HeroText'
import BottomText from '../components/home/BottomText'


const Home = () => {
  return (
    
    <div className='text-white'>
        <div className='h-screen w-screen fixed'>
            <Video/>
        </div>
        <div className='relative h-screen w-screen pb-3 overflow-hidden flex flex-col justify-between'>
            <HeroText/>
            <BottomText/>
        </div>
    </div>
  )
}

export default Home