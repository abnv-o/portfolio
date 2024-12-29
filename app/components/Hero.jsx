import React from 'react'
import Image from 'next/image';
import Imgcmp from './Imgcmp';

const Hero = () => {
  return (
   <div>
    <section className="bg-white text-black">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Freelance Developer Crafting Custom Digital Solutions</h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">Building websites, web apps, and e-commerce platforms that drive business growth.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
            View My Works
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
            Get a Free Quote
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <Image
        src="/hero.png" // Path relative to the public folder
        alt="Description of the image"
        width={600} // Specify the width
        height={400} // Specify the height
      /> */}

      <Imgcmp/>
      
        </div>                
    </div>
</section>
   </div>
  )
}

export default Hero