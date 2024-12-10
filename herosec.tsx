import React from 'react';
import Image from 'next/image'; 

const Hero = () => {
    return (
        <section className="bg-[#FBEBB5]">
            <div className="flex flex-col md:flex-row items-center px-5 mr-36 ml-36">
                {/* Left Side */}
                <div className="flex-1 ">
                    <h1 className="text-4xl sm:text-5xl font-bold font-popin mb-5">Rocket single</h1>
                    <h2 className="text-4xl sm:text-5xl font-bold font-popin mb-5">seater</h2> 
                    <button className="text-2xl font-bold px-4 underline">Shop Now</button>
                </div>
                {/* Right Side */}
                <div className="flex-1">
                    <Image 
                        src="/sofapic.png" 
                        alt="sofa-image" 
                        width={600} 
                        height={500} 
                        style={{ transform: 'rotateY(180deg)', transformStyle: 'preserve-3d' }} // Rotate the image around the Y-axis
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
