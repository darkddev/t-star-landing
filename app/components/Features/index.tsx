import Image from "next/image";
import './style.css'

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Seduce and Shine,',
        shortheading: 'Be your own boss!',
        subheading: 'By creating exclusive content, you open the door to a world of subscriptions and build a stable stream of passive income. This means financial freedom, where you earn while you sleep, travel, or develop new projects. Free yourself from the traditional 9-to-5 routine and enjoy the security and flexibility that come with a successful content career.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Social Media Strategy',
        shortheading: 'Following, Followers',
        subheading: 'Organic account growth on social media involves attracting followers through high-quality content and active engagement without using paid ads. By consistently posting relevant content and interacting with your audience, you can build a loyal and engaged following over time.',
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
