import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Useful Links",
    link: ['Home', 'Exchange', 'Features', 'FAQ'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/facebook.svg', href: "https://facebook.com/" },
  { imgsrc: '/images/Footer/instagram.svg', href: "https://instagram.com/" },
  { imgsrc: '/images/Footer/x.svg', href: "https://x.com/" },
  { imgsrc: '/images/Footer/linkedin.svg', href: "https://linkedin.com/" },
]

const footer = () => {
  return (
    <div className=" relative">
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
            <img
              className="block h-12 w-20px mb-4"
              src={'/images/Logo/logo.png'}
              alt="Crypto-Logo"
            />
            <h3 className="text-white text-xl font-medium">About Us</h3>
            <h3 className='text-lightblue text-sm font-bold leading-9 mb-1 lg:mb-1'>Increase your revenue and expand your fanbase by leveraging our specialized Content Strategy and Account Management. We collaborate with you to develop a robust strategy and handle all the details, allowing you to focus entirely on creating great content.</h3>
            <div className="col-span-4 ">
              <h4 className="text-lightblue text-sm font-bold mb-6 flex gap-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Account Management</h4>
              <h4 className="text-lightblue text-sm font-bold mb-6 flex gap-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Collaborate with other Creators</h4>
              <h4 className="text-lightblue text-sm font-bold mb-6 flex gap-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Advanced Content Strategy</h4>
              <h4 className="text-lightblue text-sm font-bold mb-6 flex gap-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 24/7 Service</h4>
            </div>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}><img src={items.imgsrc} alt={items.imgsrc} className='footer-icons' width="30px" height="30px" /></Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-6">
              <p className="text-white text-xl font-medium mb-9 box-content text-center">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5 box-content text-center'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Contact Us</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />(406) 555-012</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />tim.jennings@example.com</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Elgin St. Celina, Delaware 10299</h4>
          </div> */}

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>Copyright ©2018-2024 Tempting Stars. All Rights Reserved</h3>
      </div>

    </div>
  )
}

export default footer;
