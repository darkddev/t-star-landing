import Image from "next/image";
import './style.css'

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Visibility & Conversion',
        shortheading: 'Boost Engagement',
        subheading: 'Elevate your brand to the top of search engine results, ensuring visibility to the right audience. Our strategies enhance your site\'s conversion rate, turning visitors into customers and maximizing online sales.',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Lead & Sales',
        shortheading: 'Convert & Grow',
        subheading: 'Turn visitors into valuable leads, effectively amplifying your sales. Our targeted approach optimizes conversion tactics, making each interaction a strategic step towards significant business growth.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Marketing Automation',
        shortheading: 'Social Media Growth',
        subheading: 'Unify visibility, conversion, and lead generation to dominate your online presence. Our comprehensive marketing solutions are designed to attract and retain customers, ensuring a constant growth.',
    },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">Refine your online presence to seamlessly unlock unknown revenue streams.</h3>
                    <h2 className="text-offwhite text-3xl lg:text-4xl font-semibold leading-snug mb-6 text-center md:text-start">What targets to <span className="strikethrough">Check of?</span></h2>
                    {/* <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p> */}
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue py-5 px-5 rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="text-offwhite text-lg font-medium">{items.heading}</h5>
                                <p className="text-offwhite text-sm mb-4">{items.shortheading}</p>
                                <p className="text-lightblue text-sm font-normal ">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
