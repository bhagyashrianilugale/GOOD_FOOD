import React from 'react';

const About = () => {

   return (
       <div className="h-full mt-[28%] lg:mt-[6%]">
           <div className="flex-none lg:flex-1 lg:flex bg-orange-500 text-white">
                    <div className="p-4 lg:p-6 lg:m-auto w-full lg:w-[40%] text-center lg:text-left">
                        <h2 className="text-3xl font-bold mb-4 lg:text-3xl sm:text-xl">Our Mission</h2>
                        <p className="text-lg px-auto">At Good-Food, our mission is to bring happiness and delight 
                                         to every moment. We aim to be a cherished part of your celebrations and a 
                                         trusted companion in satisfying your cravings. With each meal, we strive to 
                                         make special occasions unforgettable and everyday moments extraordinary. 
                                         At Good-Food, we don't just serve food; we deliver happiness.</p>
                   </div>
                   <div className="mt-8">
                        <img 
                           src={require("../assets/Delivery-boy.jpg")}
                            className="w-20 hidden sm:block lg:w-60 mx-40 transform cursor-pointer transition-transform duration-500 scale-x-[-1] hover:-translate-x-20"
                        />
                    </div>
            </div>
           <div className="flex-none lg:flex-1 lg:flex bg-white text-orange-500">
               <div className="mt-8">
                        <img 
                            src={require("../assets/Delivery-boy.jpg")}                            
                            className="w-40 lg:w-60 mx-auto lg:mx-40 cursor-pointer  transform transition-transform duration-500 hover:translate-x-20"
                        />
                </div>
               <div className="p-4 lg:p-6 lg:m-auto w-full lg:w-[40%] text-center lg:text-left">
                   <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                   <p className="text-lg">To become the culinary bridge that brings diverse flavors to every 
                                       doorstep, fostering a global community where every meal is a celebration 
                                       of taste, convenience, and cultural connection.
                   </p>
               </div>
            </div>
       </div>
   );
}

export default About;


