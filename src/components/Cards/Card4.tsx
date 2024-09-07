import React from 'react'

export const Card4 = () => {
  return (
    <div><div className="w-[30%] p-4 bg-[#3B3D41] text-white rounded-lg shadow-md flex flex-col">
    {/* Profile Section */}
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img
          src="profile4.jpg"
          alt="profile"
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="ml-3 w-[80%] ">
          <h3 className="font-bold">Madeleine Work</h3>
          <p className="text-sm text-gray-400">Content Marketing Manager at Chili Piper 🌶</p>
        </div>
      </div>
      {/* LinkedIn Icon */}
      <img
          src="linkedin.png"
          alt="linkedin"
          className="w-[35px] h-[35px] object-cover"
        />
    </div>
  
    {/* Testimonial Text */}
    <p className="mb-3 p-2">
      Chili Piper just implemented our Wall of Love using Testimonial. So far results have been{" "}
      <span className="text-orange-500">🔥🔥🔥</span> Check it out:
      <a href="https://chilipiper.com/wall-of-love" className="text-blue-400"> chilipiper.com/wall-of-love</a>
    </p>
  </div>
  </div>
  )
}
