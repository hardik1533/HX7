import React from 'react'
import Video from '../components/home/Video'
import HeroText from '../components/home/HeroText'
import BottomText from '../components/home/BottomText'

const Home = () => {
  return (
    <div className="text-white overflow-hidden">
      
      {/* Background Video */}
      <div className="fixed inset-0 h-dvh w-full">
        <Video />
      </div>

      {/* Content */}
      <div className="relative h-dvh w-full flex flex-col justify-between pb-3">
        <HeroText />
        <BottomText />
      </div>

    </div>
  )
}

export default Home
