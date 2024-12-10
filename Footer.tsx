import React from 'react'
import Link from 'next/link';



const Footer = () => {
  return (
    <div>

        <footer className='bg-white py-6 px-6 text-gray-800 flex justify-around'>
            <div className='  mb-10 container mx-2 grid grid-cols-1 md:grid-cols-5 gap-6 '>
            <div>
                    <ul className='space-y-1 text-md mx-0  text-[#9F9F9F] mt-10 mb-7'>
                        <Link href="#"><li className='py-1 text-sm'>
                        400 University Drive Suite 200 Coral 
                        <br />
                         Gables,
                        <br />
                        FL 33134 USA</li></Link>

                    </ul>
                </div>
                <div>
                    <h3 className=' text-xl font-bold mb-4 text-[#9F9F9F]'>Links</h3>
                    <ul className='space-y-2 text-md'>
                        <Link href="#"><li className='py-1'>Home</li></Link>
                        <Link href="#"><li className='py-1'>Shop</li></Link> 
                        <Link href="#"><li className='py-1'>About</li></Link>
                        <Link href="#"><li className='py-1'>Contact</li></Link>
                    </ul>
                </div>
                <div>
                    <h3 className=' text-xl font-bold mb-4 text-[#9F9F9F]'>Help</h3>
                    <ul className='space-y-2 text-md'>
                        <Link href="#"><li className='py-1'>Payment Options</li></Link>
                        <Link href="#"><li className='py-1'>Returns</li></Link> 
                        <Link href="#"><li className='py-1'>Privacy Policies</li></Link>

                    </ul>
                </div>
                <div>
                    <h3 className=' text-xl font-bold mb-4 text-[#9F9F9F]'>Newsletter</h3>
                    <ul className='space-y-2 text-md'>
                        <Link href="#"><li className='py-1 text-[#9F9F9F] underline'>Enter Your Email Address</li></Link>
                    </ul>
                </div>
                <div>
                    <ul className='space-y-2 text-md'>
                        <Link href="#"><li className='py-1 underline mt-10'>
                        SUBSCRIBE</li></Link>
                    </ul>
                </div>



            </div>
            
        </footer>
    </div>
  )
}

export default Footer;