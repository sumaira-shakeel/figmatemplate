import React from 'react';
import Image from 'next/image'; 

const Section3 = () => {
    return (
        <section className="bg-[#FFF9E5] w-[100%]">
            <div className="flex flex-col md:flex-row items-center px-5 mr-36 ml-36">
                {/* Left Side */}
                <div className="w-[70%]">
                    <Image 
                        src="/asguardsofa.png" 
                        alt="sofa-image" 
                        width={600} 
                        height={500} 
                        style={{ transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }} // Rotate the image around the Y-axis
                    />
                </div>



                <div className="w-[30%] ">
                    <h3 className="text-4xl sm:text-4xl  lg:text-2xl  mb-5">New Arrivals</h3>
                    <h1 className="text-4xl sm:text-3xl font-semibold  mb-5">Asgaard sofa</h1> 
                    <button className="text-2xl font-bold  border-2 px-10 py-1 ">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Section3;
