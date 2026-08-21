// import React from "react";
// import UI_IMG from "../../assets/images/auth-img.png"; 

// const AuthLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen w-screen">
//       {/* Left content */}
//       <div className="w-full h-full md:w-[60vw] px-12 pt-8 pb-12 flex flex-col">
//         <h2 className="text-lg font-medium text-black mb-6">Task Manager</h2>
//         {children} {/* Render children here */}
//       </div>

//       {/* Right image/content */}
//       <div className="hidden md:flex w-[40vw] h-screen items-center justify-center  bg-cover bg-no-repeat bg-center overflow-hidden p-8">
//         <img src={UI_IMG} alt="Auth" className="h-full w-full object-cover" />
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;

import React from "react";
import UI_IMG from "../../assets/images/auth-img.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left content */}
      <div className="w-full h-full md:w-[60%] px-12 pt-8 pb-12 flex flex-col z-10 bg-white">
        <h2 className="text-lg font-medium text-black mb-6">Task Manager</h2>
        {children}
      </div>

      {/* Right image/content */}
      <div className="hidden md:block relative w-[40%] h-full">
        <img
          src={UI_IMG}
          alt="Auth"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
