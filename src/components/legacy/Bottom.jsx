import React from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import BottomImage from '../../common/BottomImage';

// Left column (image1): first 15
const col1 = [
  { name: "Ferrari F40 (1987)", wiki: "https://en.wikipedia.org/wiki/Ferrari_F40" },
  { name: "Lamborghini Miura P400 (1966)", wiki: "https://en.wikipedia.org/wiki/Lamborghini_Miura" },
  { name: "Porsche 911 Carrera RS 2.7 (1973)", wiki: "https://en.wikipedia.org/wiki/Porsche_911" },
  { name: "McLaren F1 (1992)", wiki: "https://en.wikipedia.org/wiki/McLaren_F1" },
  { name: "Jaguar E-Type Series 1 (1961)", wiki: "https://en.wikipedia.org/wiki/Jaguar_E-Type" },
  { name: "Mercedes-Benz 300SL Gullwing (1954)", wiki: "https://en.wikipedia.org/wiki/Mercedes-Benz_300_SL" },
  { name: "Aston Martin DB5 (1963)", wiki: "https://en.wikipedia.org/wiki/Aston_Martin_DB5" },
  { name: "Chevrolet Corvette C2 Stingray (1963)", wiki: "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C2)" },
  { name: "Toyota 2000GT (1967)", wiki: "https://en.wikipedia.org/wiki/Toyota_2000GT" },
  { name: "Mazda RX-7 FD (1992)", wiki: "https://en.wikipedia.org/wiki/Mazda_RX-7" },
  { name: "Shelby Cobra 427 (1965)", wiki: "https://en.wikipedia.org/wiki/AC_Cobra" },
  { name: "Lancia Stratos HF (1973)", wiki: "https://en.wikipedia.org/wiki/Lancia_Stratos" },
  { name: "De Tomaso Pantera (1971)", wiki: "https://en.wikipedia.org/wiki/De_Tomaso_Pantera" },
  { name: "Porsche 917 (1969)", wiki: "https://en.wikipedia.org/wiki/Porsche_917" },
  { name: "Mercedes-Benz CLK GTR (1997)", wiki: "https://en.wikipedia.org/wiki/Mercedes-Benz_CLK_GTR" },
];

// Right column (image2): next 15
const col2 = [
  { name: "Ferrari F50 (1995)", wiki: "https://en.wikipedia.org/wiki/Ferrari_F50" },
  { name: "Lamborghini Countach LP400 (1974)", wiki: "https://en.wikipedia.org/wiki/Lamborghini_Countach" },
  { name: "Porsche 959 (1986)", wiki: "https://en.wikipedia.org/wiki/Porsche_959" },
  { name: "Bugatti EB110 SS (1994)", wiki: "https://en.wikipedia.org/wiki/Bugatti_EB_110" },
  { name: "Ford GT40 Mk II (1966)", wiki: "https://en.wikipedia.org/wiki/Ford_GT40" },
  { name: "BMW M1 (1978)", wiki: "https://en.wikipedia.org/wiki/BMW_M1" },
  { name: "Aston Martin V8 Vantage (1977)", wiki: "https://en.wikipedia.org/wiki/Aston_Martin_V8_Vantage_(1977)" },
  { name: "Dodge Viper RT/10 (1992)", wiki: "https://en.wikipedia.org/wiki/Dodge_Viper" },
  { name: "Nissan Skyline GT-R R34 (1999)", wiki: "https://en.wikipedia.org/wiki/Nissan_Skyline_GT-R" },
  { name: "Honda NSX NA1 (1990)", wiki: "https://en.wikipedia.org/wiki/Honda_NSX_(first_generation)" },
  { name: "Ferrari 250 GTO (1962)", wiki: "https://en.wikipedia.org/wiki/Ferrari_250_GTO" },
  { name: "Alfa Romeo 33 Stradale (1967)", wiki: "https://en.wikipedia.org/wiki/Alfa_Romeo_33_Stradale" },
  { name: "Pagani Zonda C12 (1999)", wiki: "https://en.wikipedia.org/wiki/Pagani_Zonda" },
  { name: "BMW E30 M3 (1988)", wiki: "https://en.wikipedia.org/wiki/BMW_3_Series_(E30)" },
  { name: "Ford Mustang Boss 429 (1969)", wiki: "https://en.wikipedia.org/wiki/Boss_429_Mustang" }

  
];

const imageCount = 30; // Total images (15 rows x 2 columns)
const images = Array.from({ length: imageCount / 2 }, (_, i) => ({
  image1: `/assets/images/legacy/bottomimages/${i * 2}.jpg`,
  brand1: col1[i].name,
  wiki1: col1[i].wiki,

  image2: `/assets/images/legacy/bottomimages/${i * 2 + 1}.jpg`,
  brand2: col2[i].name,
  wiki2: col2[i].wiki
}));


const Bottom = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(
    function () {
      gsap.from('.bottomcard', {
        height: '55px',
        stagger: {
          amount: 0.4,
          ease: 'power1.out'
        },
        scrollTrigger: {

          trigger: '.bottomcardparent',
          start: 'top 180%',
          end: 'top -100%',
          // markers: true,
          scrub: true
        }
      })

    }
  )

  return (
    <div className='p-3  uppercase'>
      <div >
        <h2 className='text-[11vw] font-[font2] '>Legacy</h2>
      </div>

      <div className='bottomcardparent -mt-[4.5vw]'>
        {images.map((elem, idx) => {
          return <div key={idx} className='bottomcard flex lg:flex-row flex-col h-180px w-full  pb-2 gap-3'>
            <BottomImage image1={elem.image1} image2={elem.image2} brand1={elem.brand1} brand2={elem.brand2} link1={elem.wiki1} link2={elem.wiki2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Bottom
