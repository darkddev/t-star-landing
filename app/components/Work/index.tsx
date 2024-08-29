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
        heading: 'Content',
        subheading: 'Dreaming of a website that wows? From the drawing board to maintenance',
        hiddenpara: ', we\'re your go-to team for sites that impress and perform.',
    },
    {
        imgSrc: '/images/Work/website.svg',
        heading: 'Website',
        subheading: 'A website without content is like a party without music.',
        hiddenpara: ' Let\'s fill your site with catchy text, stunning images, and videos that stick.',
    },
    {
        imgSrc: '/images/Work/marketing.svg',
        heading: 'Marketing',
        subheading: 'Ready to boost your online presence?',
        hiddenpara: ' Dive into our SEO, SEA, and social media strategies to make your brand pop.',
    },

]

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative' id="how-it-work">
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'><b>51.</b>&nbsp;&nbsp;&nbsp;GROWING BUSINESSES<br/><b>250<span className='text-red'>%</span></b>&nbsp;&nbsp;&nbsp;MORE TRAFFIC</p>
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
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-5'>{items.heading}</h3>
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
