
// import React from 'react';
import React from 'react';
import Image from 'next/image';

const Section2 = () => {
    return (
        <section className='mt-16 lg:mt-28'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl text-center mb-4'>Top Picks For You</h2>
            <p className='text-sm sm:text-base md:text-lg text-center text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            <div className='max-w-screen-2xl mx-auto'>
                {/* content */}
                <div className='px-6'></div>
                {/* boxes */}
                <div className='flex flex-col lg:flex-row gap-7 my-20 justify-center'>

                    <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 relative px-4 py-8 hover:shadow-lg'>
                        <div>
                            <Image src={"/trainton.png"} alt={"sofaimage"} width={400} height={500} className='rounded-md' />
                        </div>
                        <h4 className='font-bold text-lg'>Trenton modular sofa_3</h4>
                        <p className='mt-2 text-slate-600'>Rs. 25,000.00</p>
                    </div>

                    <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 relative px-4 py-8'>
                        <div>
                            <Image src={"/grainte.png"} alt={"sofaimage"} width={300} height={300} className='rounded-md' />
                        </div>
                        <h4 className='font-bold text-lg'>Granite dining table with dining chair</h4>
                        <p className='mt-2 text-slate-600'>Rs. 25,000.00</p>
                    </div>

                    <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 relative px-4 py-8'>
                        <div>
                            <Image src={"/outbar.png"} alt={"image"} width={250} height={376} className='rounded-md' />
                        </div>
                        <h4 className='font-bold text-lg'>Plain console with teak mirror</h4>
                        <p className='mt-2 text-slate-600'>Rs. 25,000.00</p>
                    </div>

                    <div className='w-full sm:w-6/12 md:w-4/12 lg:w-3/12 relative px-4 py-8'>
                        <div>
                            <Image src={"/planeconsole.png"} alt={"sofaimage"} width={300} height={300} className='rounded-md' />
                        </div>
                        <h4 className='font-bold text-lg'>Plain console with teak mirror</h4>
                        <p className='mt-2 text-slate-600'>Rs. 25,000.00</p>
                    </div>
                </div>

                <div className='text-center'>
                    <button className=' px-4 py-2  '>View More</button>
                </div>
            </div>
        </section>
    );
}

export default Section2;
