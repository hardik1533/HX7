import { Link } from "react-router"


const BottomText = () => {
      return (
            <div className='font-[font1] flex justify-center items-center lg:gap-5 gap-1'>
                  <div className='border-3 lg:h-30  hover:border-[#d3fd50] hover:text-[#d3fd50] flex items-center lg:px-8  px-3  border-white rounded-full uppercase'>
                        <Link className='text-[6.5vw] lg:mt-6' to={'/legacy'}>Legacy</Link>
                  </div>
                  <div className='border-3 lg:h-30 hover:border-[#d3fd50] hover:text-[#d3fd50] flex items-center lg:px-8 px-3 border-white rounded-full uppercase'>
                        <Link className='text-[6.5vw] lg:mt-6' to={'/brands'}>Brands</Link>
                  </div>
                  <div className='border-3 lg:h-30 hover:border-[#d3fd50] hover:text-[#d3fd50] flex items-center lg:px-8 px-3 border-white rounded-full uppercase'>
                        <Link className='text-[6.5vw] lg:mt-6' to={'/empire'}>Empire</Link>
                  </div>
            </div>
      )
}

export default BottomText