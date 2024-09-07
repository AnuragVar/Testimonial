import React from 'react'

export const Card3 = () => {
  return (
    <div><div className="w-[30%] p-4 bg-[#3B3D41] text-white rounded-lg shadow-md relative">
    {/* Profile and Close Button */}
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img
          src="profile3.jpg"
          alt="profile"
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="font-bold">Tibbo</h3>
          <p className="text-sm text-gray-400">@tibbo_maker</p>
        </div>
      </div>
      <img
          src="twitter.png"
          alt="twitter"
          className="w-[35px] h-[35px] object-cover"
        />
    </div>
  
  <div className='p-2'>
    <p className="mb-3">
      I&apos;ve been using testimonial.to last few weeks and I absolutely LOVE it{" "}
      <span className="text-red-500">❤️</span>
    </p>
    <p className="mb-3">
      Once you start, you understand how it boosts your social proof. Worth every
      penny.
    </p>
    <p className="mb-3">
      Thanks <span className="text-blue-500">@mengchen</span> for building it{" "}
      <span className="text-purple-500">🙏</span>
    </p>
    </div>

    <div className="flex items-center">
      <span className="text-red-500 text-xl">❤️</span>
      <span className="ml-2 text-gray-400">6</span>
    </div>
  </div>
  </div>
  )
}
