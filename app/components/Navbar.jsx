import React from 'react'
import ParticleAnimation from "./ParticleAnimation";
const Navbar = () => {
  return (
        <div className="relative mx-4 overflow-hidden w-full h-20 my-2 border-b-2 border-gray-500 rounded-xl shadow-md shadow-gray-300 flex flex-row items-center py-4 px-8 justify-between text-black">
        <ParticleAnimation />
        <div className="z-10  bg-[#b9ff66] py-1 px-2 rounded-md border-r-4 border-b-4 border-black shadow-lg">
          <h1 className="text-3xl font-bold">ABHINAV O</h1>
        </div>

        <div className="z-10  flex justify-around items-center gap-8">
          <button className="p-2 px-4 hover:skew-y-3 hover:skew-x-3 rounded-md hover:bg-[#b9ff66] hover:border-r-4 hover:border-t-4 hover:border-black border-2 border-gray-100 bg-white hover:shadow-md shadow-sm">
            Home
          </button>
          <button className="p-2 px-4 hover:-skew-y-3 hover:-skew-x-3 rounded-md hover:bg-[#b9ff66] hover:border-l-4 hover:border-b-4 hover:border-black border-2 border-gray-100 bg-white hover:shadow-md shadow-sm">
            About
          </button>
          <button className="p-2 px-4 hover:skew-y-3 hover:skew-x-3 rounded-md hover:bg-[#b9ff66] hover:border-r-4 hover:border-t-4 hover:border-black border-2 border-gray-100 bg-white hover:shadow-md shadow-sm">
            Gallery
          </button>
          <button className="p-2 px-4 hover:-skew-y-3 hover:-skew-x-3  rounded-md hover:bg-[#b9ff66] hover:border-r-4 hover:border-b-4 hover:border-black border-2 border-gray-100 bg-white hover:shadow-md shadow-sm">
            Contact
          </button>
        </div>
      </div>
  )
}

export default Navbar