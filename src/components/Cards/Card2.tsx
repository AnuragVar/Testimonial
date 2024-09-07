import React from "react";

export const Card2 = () => {
  return (
    <div className="w-[30%] p-4 flex flex-col shadow-lg bg-[#3B3D41] rounded-lg">
    {/* Profile Section */}
    <div className="flex items-center mb-4">
      <img
        src="profile1.jpg"
        alt="testimonial1"
        className="w-[50px] h-[50px] rounded-full object-cover"
      />
      <div className="ml-4">
        <h2 className="text-white text-lg font-bold">Sam Curran</h2>
        <p className="text-gray-400 text-sm">
        Founder and CEO of develop.com
        </p>
      </div>
    </div>
  
  
    <div className="flex mb-4">
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
      <span className="text-yellow-400 text-xl">★</span>
    </div>
  
    {/* Testimonial Text */}
    <p className="text-white mb-4">
      Testimonial.to has helped us seamlessly integrating tweets from Twitter
      into our Wall of Love. It allows us to showcase authentic testimonials and
      amplify our credibility as a trusted partner in helping startups get
      acquired. <span className="bg-[#F5F5DC] text-black p-1">
        Testimonial.to has truly transformed our community-building efforts.
      </span>
    </p>
  
    {/* Company Logo */}
    <div className="flex justify-center mt-4">
      <img
        src="logo1.png"
        alt="company logo"
        className="h-8"
      />
    </div>
  </div>
  
  );
};
