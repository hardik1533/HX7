import React from 'react'

const BottomImage = (props) => {
    return (
        <>
            <div className="relative group h-full lg:w-1/2 md:w-full transition-all hover:rounded-[50px] overflow-hidden cursor-pointer">
                <a
                href={props.link1}
                target="_blank"
                rel="noopener noreferrer"
                
            >
                <img
                    className="h-full w-full object-cover transition-all group-hover:scale-108 group-hover:opacity-70"
                    src={props.image1}
                    alt=""
                />
                <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
                    <h2 className="font-[font2] lg:text-5xl lg:leading-12 lg:px-5 lg:pt-3  md:text-4xl md:px-5 md:leading-10 md:pt-2 sm:text-4xl sm:leading-10 sm:px-4 sm:pt-2 text-2xl px-2 text-white border-2 rounded-full">
                        {props.brand1}
                    </h2>
                </div>
            </a>
            </div>

            <div className="relative group h-full lg:w-1/2 md:w-full transition-all hover:rounded-[50px] overflow-hidden cursor-pointer">
                <a
                href={props.link2}
                target="_blank"
                rel="noopener noreferrer"
                
            >
                <img
                    className="h-full w-full object-cover transition-all group-hover:scale-108 group-hover:opacity-70"
                    src={props.image2}
                    alt=""
                />
                <div className="absolute opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
                    <h2 className="font-[font2] lg:text-5xl lg:leading-12 lg:px-5 lg:pt-3  md:text-4xl md:px-5 md:leading-10 md:pt-2 sm:text-4xl sm:leading-10 sm:px-4 sm:pt-2 text-2xl px-2 text-white border-2 rounded-full">
                        {props.brand2}
                    </h2>
                </div>
            </a>
            </div>
        </>
    )
}

export default BottomImage