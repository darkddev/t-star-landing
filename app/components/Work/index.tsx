"use client"
import Image from 'next/image';
import './style.css'

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/content.svg',
        heading: 'Advanced Content Strategy',
        subheading: 'We offer full support in marketing and promotion for your unique content.',
        hiddenpara: 'A thoughtful and tailored content strategy is essential for your success.',
    },
    {
        imgSrc: '/images/Work/website.svg',
        heading: 'Active Account Growth',
        subheading: 'Loyal followers are the core of your success. We are committed to steadily',
        hiddenpara: ' growing your fanbase by attracting new followers to your account every day.',
    },
    {
        imgSrc: '/images/Work/marketing.svg',
        heading: 'Full Account Management',
        subheading: 'Leave the management of your exclusive social media channels to us.',
        hiddenpara: ' This way, you can fully focus on creating engaging content for your fans while we take care of the rest.',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative' id="how-it-work">
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish text-2xl md:text-3xl font-normal leading-8'><b>21<span className='text-red'>.</span></b>&nbsp;&nbsp;&nbsp;MODELS<br/><b>4000<span className='text-red'>+</span></b>&nbsp;&nbsp;&nbsp;FANS</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image className='item-image' src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-1xl md:text-2xl text-offwhite font-semibold text-center mt-5'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-bluish text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
