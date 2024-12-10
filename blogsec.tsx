

import React from 'react';
import Image from 'next/image';
import { MdOutlineWatchLater } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const Blogs = () => {
    return (
        <section className='mt-16 lg:mt-28'>
            <div className='px-6 text-center'>
                {/* Heading */}
                <h4 className='text-3xl sm:text-4xl font-bold mb-6'>Our Blogs</h4>
                <p className='mt-7 text-lg mb-6 text-[#9F9F9F]'>
                    Find a bright ideal to suit your taste with our great selection
                </p>

                {/* Blog Cards */}
                <div className='flex flex-wrap justify-center gap-6 my-20'>
                    {/* Card 1 */}
                    <div className='w-[400px] h-[500px] bg-white rounded-md shadow-md flex flex-col overflow-hidden'>
                        {/* Image Section (70%) */}
                        <div className='h-[70%] w-full'>
                            <Image
                                src="/image3.jpeg"
                                alt="cakeimage"
                                width={400}
                                height={350}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        {/* Heading Section (10%) */}
                        <div className='h-[10%] flex items-center justify-center px-4'>
                            <h4 className='text-center text-sm font-semibold'>Going all-in with millennial design</h4>
                        </div>
                        {/* Button Section (10%) */}
                        <div className='h-[10%] flex items-center justify-center mt-0'>
                            <button className='underline text-xl   '>Read More</button>
                        </div>
                        <div className='flex gap-x-3  text-sm justify-center items-center
                        '>
                            <div className='flex gap-x-1 '>
                            <MdOutlineWatchLater className='text-xl' />
                            <p>5 min</p>

                            </div>
                            <div className='flex gap-x-1'>
                            <CiCalendar className='text-xl' />
                            <p>12th Oct 2022</p>

                            </div>

                        </div>

                    </div>

                    {/* Card 2 */}
                    <div className='w-[400px] h-[500px] bg-white rounded-md shadow-md flex flex-col overflow-hidden'>
                        <div className='h-[70%] w-full'>
                            <Image
                                src="/image2.jpeg"
                                alt="cakeimage"
                                width={400}
                                height={350}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='h-[10%] flex items-center justify-center px-4'>
                            <h4 className='text-center text-sm font-semibold'>Going all-in with millennial design</h4>
                        </div>
                        <div className='h-[10%] flex items-center justify-center mt-0'>
                            <button className='underline text-xl   '>Read More</button>
                        </div>
                        <div className='flex gap-x-3  text-sm justify-center items-center
                        '>
                            <div className='flex gap-x-1 '>
                            <MdOutlineWatchLater className='text-xl' />
                            <p>5 min</p>

                            </div>
                            <div className='flex gap-x-1'>
                            <CiCalendar className='text-xl' />
                            <p>12th Oct 2022</p>

                            </div>

                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className='w-[400px] h-[500px] bg-white rounded-md shadow-md flex flex-col overflow-hidden'>
                        <div className='h-[70%] w-full'>
                            <Image
                                src="/image1.jpeg"
                                alt="pattiesimage"
                                width={400}
                                height={350}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='h-[10%] flex items-center justify-center px-4'>
                            <h4 className='text-center text-sm '>Going all-in with millennial design</h4>
                        </div>
                        <div className='h-[10%] flex items-center justify-center mt-0'>
                            <button className='underline text-xl   '>Read More</button>
                        </div>
                        {/*  icons**888 */}
                        <div className='flex gap-x-3  text-sm justify-center items-center
                        '>
                            <div className='flex gap-x-1 '>
                            <MdOutlineWatchLater className='text-xl' />
                            <p>5 min</p>

                            </div>
                            <div className='flex gap-x-1'>
                            <CiCalendar className='text-xl' />
                            <p>12th Oct 2022</p>

                            </div>

                        </div>







                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;