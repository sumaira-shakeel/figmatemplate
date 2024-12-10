// import React from 'react'
// import Image from "next/image"

// const Section1 = () => {
//     return (
//         <section className="bg-[#FAFAFA] h-[100%] w-full"> {/* Height aur width ko adjust kiya */}
//             <div className="flex flex-col md:flex-row items-center justify-around px-5">

//                 {/* Right Side */}
//                 <div className="flex-1 flex flex-col items-center relative"> {/* Centering items */}
//                     <Image 
//                         src="/sidetable.png" 
//                         alt="table-image" 
//                         width={400} 
//                         height={400}
//                     />
//                     <div className='absolute bottom-[-20px] mb-4 text-center'> {/* Adjusted bottom value */}
//                         <h1 className='text-2xl font-bold font-sans mb-2'>Side Table</h1>
//                         <button className='underline text-md'>View More</button>
//                     </div>
//                 </div>
//                 <div className="flex-1 flex flex-col items-center relative"> {/* Centering items */}
//                     <Image 
//                         src="/cloudsofa.png" 
//                         alt="sofa-image" 
//                         width={400} 
//                         height={400}
//                     />
//                     <div className='absolute bottom-[-150px] mb-4 text-center'> {/* Adjusted bottom value */}
//                         <h1 className='text-2xl font-bold font-sans mb-2'>Cloud Sofa</h1>
//                         <button className='underline text-md'>View More</button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Section1;
import React from 'react';
import Image from "next/image";

const Section1 = () => {
    return (
        <section className="bg-[#FAFAFA] h-[100%] w-full mb-16"> {/* Added mb-16 for spacing */}
            <div className="flex flex-col md:flex-row items-center justify-around px-5">

                {/* Right Side */}
                <div className="flex-1 flex flex-col items-center relative"> {/* Centering items */}
                    <Image 
                        src="/sidetable.png" 
                        alt="table-image" 
                        width={400} 
                        height={400}
                    />
                    <div className='absolute bottom-[-20px] mb-4 text-center'> {/* Adjusted bottom value */}
                        <h1 className='text-2xl font-bold font-sans mb-2'>Side Table</h1>
                        <button className='underline text-md'>View More</button>
                    </div>
                </div>
                <div className="flex-1 flex flex-col items-center relative"> {/* Centering items */}
                    <Image 
                        src="/cloudsofa.png" 
                        alt="sofa-image" 
                        width={400} 
                        height={400}
                    />
                    <div className='absolute bottom-[-150px] mb-4 text-center'> {/* Adjusted bottom value */}
                        <h1 className='text-2xl font-bold font-sans mb-2'>Cloud Sofa</h1>
                        <button className='underline text-md'>View More</button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Section1;