// // components/InstagramSection.js

// import React from 'react';

// const InstagramSection = () => {
//   return (
//     <div className="relative w-[1440px] h-[450px] bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/background.jpeg')" }}>
       
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//         <h1 className="text-black text-4xl mb-2">Our Instagram</h1>
//         <p className="text-black text-lg mb-4">Follow our store on Instagram</p>
//         <button className="bg-black text-white py-2 px-4 rounded">Follow Us</button>
//       </div>

//     </div>
//   );
// };

// export default InstagramSection;
// components/InstagramSection.js

// import React from 'react';

// const InstagramSection = () => {
//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="relative w-[1440px] h-[450px]">
//         {/* Blurred background */}
//         <div
//           className="absolute inset-0 bg-cover bg-center filter blur-sm"
//           style={{ backgroundImage: "url('/background.jpeg')" }}
//         ></div>

//         {/* Content */}
//         <div className="relative flex flex-col justify-center items-center text-center z-10">
//           <h1 className="text-black text-4xl mb-2">Our Instagram</h1>
//           <p className="text-black text-lg mb-4">Follow our store on Instagram</p>
//           <button className="bg-black text-white py-2 px-4 rounded">Follow Us</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstagramSection;
// components/InstagramSection.js

import React from 'react';

const InstagramSection = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-[1440px] h-[450px]">
        {/* Blurred background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: "url('/background.jpeg')" }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center  mt-36 text-center z-10 p-8">
          <h1 className="text-black text-6xl mb-4 font-bold">Our Instagram</h1>
          <p className="text-black text-lg mb-6">Follow our store on Instagram</p>
          <button className="bg-black text-white py-2 px-6 rounded">Follow Us</button>
        </div>
      </div>
    </div>
  );
};

export default InstagramSection;

