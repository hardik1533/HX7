import React from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import BottomImage from '../../common/BottomImage';

// Left column (image1): first 15
const col1 = [
    { name: "Bugatti Chiron Super Sport (2021)", wiki: "https://en.wikipedia.org/wiki/Bugatti_Chiron" },
    { name: "Ferrari LaFerrari (2013)", wiki: "https://en.wikipedia.org/wiki/LaFerrari" },
    { name: "Ferrari Daytona SP3 (2022)", wiki: "https://en.wikipedia.org/wiki/Ferrari_Daytona_SP3" },
    { name: "Lamborghini Revuelto (2024)", wiki: "https://en.wikipedia.org/wiki/Lamborghini_Revuelto" },
    { name: "McLaren Speedtail (2020)", wiki: "https://en.wikipedia.org/wiki/McLaren_Speedtail" },
    { name: "Porsche 918 Spyder (2015)", wiki: "https://en.wikipedia.org/wiki/Porsche_918_Spyder" },
    { name: "Pagani Huayra BC (2017)", wiki: "https://en.wikipedia.org/wiki/Pagani_Huayra" },
    { name: "Koenigsegg Agera RS (2017)", wiki: "https://en.wikipedia.org/wiki/Koenigsegg_Agera" },
    { name: "Rimac Nevera (2022)", wiki: "https://en.wikipedia.org/wiki/Rimac_Nevera" },
    { name: "Aston Martin DBS Superleggera", wiki: "https://en.wikipedia.org/wiki/Aston_Martin_DBS_Superleggera" },
    { name: "BMW M5 CS (2022)", wiki: "https://en.wikipedia.org/wiki/BMW_M5" },
    { name: "Chevrolet Corvette C8 Z06 (2023)", wiki: "https://en.wikipedia.org/wiki/Chevrolet_Corvette_(C8)" },
    { name: "Tesla Roadster (Upcoming)", wiki: "https://en.wikipedia.org/wiki/Tesla_Roadster_(2020)" },
    { name: "Maserati MC20 (2022)", wiki: "https://en.wikipedia.org/wiki/Maserati_MC20" },
    { name: "Hennessey Venom F5 (2023)", wiki: "https://en.wikipedia.org/wiki/Hennessey_Venom_F5" },
];

// Right column (image2): next 15
const col2 = [
    { name: "Bugatti Mistral (2024)", wiki: "https://www.bugatti.com/mistral/models/w16-mistral" },
    { name: "Ferrari SF90 Stradale (2020)", wiki: "https://en.wikipedia.org/wiki/Ferrari_SF90_Stradale" },
    { name: "Lamborghini Aventador SVJ (2019)", wiki: "https://en.wikipedia.org/wiki/Lamborghini_Aventador" },
    { name: "McLaren P1 (2013)", wiki: "https://en.wikipedia.org/wiki/McLaren_P1" },
    { name: "McLaren 765LT (2021)", wiki: "https://en.wikipedia.org/wiki/McLaren_765LT" },
    { name: "Porsche 911 GT3 RS (2023)", wiki: "https://en.wikipedia.org/wiki/Porsche_911_GT3" },
    { name: "Pagani Utopia (2023)", wiki: "https://en.wikipedia.org/wiki/Pagani_Utopia" },
    { name: "Koenigsegg Jesko Absolut (2024)", wiki: "https://en.wikipedia.org/wiki/Koenigsegg_Jesko" },
    { name: "Aston Martin Valkyrie (2022)", wiki: "https://en.wikipedia.org/wiki/Aston_Martin_Valkyrie" },
    { name: "Mercedes-AMG One (2023)", wiki: "https://en.wikipedia.org/wiki/Mercedes-AMG_One" },
    { name: "Nissan GT-R Nismo (2024)", wiki: "https://en.wikipedia.org/wiki/Nissan_GT-R" },
    { name: "Ford GT (2017)", wiki: "https://en.wikipedia.org/wiki/Ford_GT" },
    { name: "Lotus Evija (2024)", wiki: "https://en.wikipedia.org/wiki/Lotus_Evija" },
    { name: "Zenvo TSR-S (2021)", wiki: "https://en.wikipedia.org/wiki/Zenvo_TSR-S" },
    { name: "SSC Tuatara (2022)", wiki: "https://en.wikipedia.org/wiki/SSC_Tuatara" }
];

const imageCount = 30; // Total images (15 rows x 2 columns)
const images = Array.from({ length: imageCount / 2 }, (_, i) => ({
    image1: `/assets/images/empire/bottomimages/${i * 2}.jpg`,
    brand1: col1[i].name,
    wiki1: col1[i].wiki,

    image2: `/assets/images/empire/bottomimages/${i * 2 + 1}.jpg`,
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
                <h2 className='text-[11vw] font-[font2] '>Empire</h2>
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