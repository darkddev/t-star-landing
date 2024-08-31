"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';


const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image relative' id="home-section">
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1xxxxxxQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                Tempting Stars.
                            </h1>
                            <h1 className="text-1xl lg:text-3xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                Join Our Agency
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'><b>Discover Your Inner Seductress. Become a Radiant Star in the World of Sensuality and Playfully Earn Your Freedom!</b></p>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'><b>Let’s achieve success together.</b></p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <a href='#chat-section' className='text-xl font-semibold text-white py-4 px-4 lg:px-12 navbutton mr-6'>Get Started</a>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'><Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />How it work</button>
                            </div>
                        </div>

                        <div className='col-span-5 lg:-m-48'>
                            <div className='arrowThree'></div>
                            <div className='arrowFour'></div>
                            <div className='arrowFive'></div>
                            <Image src="/images/Banner/banner.png" alt="nothing" width={1014} height={760} />
                            <div className='arrowSix'></div>
                            <div className='arrowSeven'></div>
                            <div className='arrowEight'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
