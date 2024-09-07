"use client";

import { Card1 } from "@/components/Cards/Card1";
import { Card2 } from "@/components/Cards/Card2";
import { Card3 } from "@/components/Cards/Card3";
import { Card4 } from "@/components/Cards/Card4";

export default function Home() {
  return (
    <>
      {/* Main content */}
      <div className="bg-gray-900 text-white  p-6">
      <div className="mt-16 text-center flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold mb-6 w-[70%]">Easily gather testimonials from your clients.</h1>
      <p className="text-gray-400 mb-8 max-w-4xl mx-auto">
      We understand that gathering testimonials can be challenging. That&#39;s why we created Testimonial. In just a few minutes, you can easily collect both text and video testimonials from your customers, all without needing a developer or hosting a website  </p>
      <div className="flex justify-center space-x-4 mb-6">
        <button className="bg-indigo-600 hover:bg-indigo-700 hover:scale-110 duration-200 text-white py-3 px-6 rounded">Try FREE now</button>
        <button className="bg-gray-800 hover:bg-gray-700 hover:scale-110 duration-200 text-white py-3 px-6 rounded border border-indigo-600">Talk to us</button>
      </div>
      <p className="text-gray-400">
        Get started with free credits on us. <a href="#pricing" className="text-indigo-600 hover:text-indigo-400">See our pricing →</a>
      </p>
      <p className="text-indigo-600 mt-6">
        <a href="#chris-lema" className="relative inline-block">
          Our customer Chris Lema
          <span className="absolute bottom-0 left-0 w-5 h-0.5 bg-indigo-600"></span>
        </a>
      </p>
    </div>
    </div>

    <div className="bg-gray-900 text-white py-12 px-8 text-center">
      {/* Trusted Customers Section */}
      <div className="mb-10">
        <h2 className="text-gray-400 uppercase tracking-wide mb-8">Trusted Customers</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <img src="/path/to/mixpanel-logo.png" alt="Mixpanel" className="h-8 mx-auto"/>
          <img src="/path/to/ko-fi-logo.png" alt="Ko-fi" className="h-8 mx-auto"/>
          <img src="/path/to/microacquire-logo.png" alt="MicroAcquire" className="h-8 mx-auto"/>
          <img src="/path/to/yoast-logo.png" alt="Yoast" className="h-8 mx-auto"/>
          <img src="/path/to/yotta-logo.png" alt="Yotta" className="h-8 mx-auto"/>
          <img src="/path/to/earnest-capital-logo.png" alt="Earnest Capital" className="h-8 mx-auto"/>
          <img src="/path/to/rewardful-logo.png" alt="Rewardful" className="h-8 mx-auto"/>
          <img src="/path/to/chime-logo.png" alt="Chime" className="h-8 mx-auto"/>
          <img src="/path/to/levels-fyi-logo.png" alt="Levels.fyi" className="h-8 mx-auto"/>
          <img src="/path/to/chili-piper-logo.png" alt="Chili Piper" className="h-8 mx-auto"/>
        </div>
      </div>

      {/* Add Testimonials Section */}
      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-6xl font-bold mb-4 w-[80%]">Add testimonials to your website with no coding!</h2>
        <p className="text-gray-400 mb-4 w-[80%]">
          Copy and paste our HTML code to add the Wall Of Love 
          <span role="img" aria-label="thumbs up">👍</span> 
          <a href="/full-version" className="text-indigo-600 hover:underline">full version</a>
          to your website. We support any no-code platform (Webflow, WordPress, you name it!)
        </p>
      </div>
    </div>

           

    <div className="min-h-screen bg-gray-900 text-white">
    
      <div className="flex flex-col items-center justify-center px-4 py-20 gap-y-16">
        <h1 className="text-5xl font-bold text-center w-[80%]">
          Collect and display testimonials all in one solution
        </h1>
       
 
      <div className="flex justify-around ">
        <div className="w-[40%] ml-8 mb-8 md:mb-0 mt-10 pt-4">
            <h2 className="text-2xl font-semibold">Quick to setup</h2>
            <h3 className="text-4xl font-bold mt-4">A dedicated landing page</h3>
            <p className="text-gray-400 mt-4">
              Create a dedicated landing page for your business. Share the page link easily via
              email, social media, or even SMS. Setup can be done in two minutes.
            </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Try it for free
            </button>
          </div>
        <div className=" w-[40%] mr-8 flex flex-col md:flex-row items-center justify-between  shadow-lg ">
       
         
        <img src="testimonial1.png" alt="testimonial1" className="hover:scale-110 duration-200"/>
          </div>
        
      </div>

      <div className="flex justify-around">
       
        <div className=" w-[40%] mr-8 flex flex-col md:flex-row items-center justify-between  shadow-lg ">
       
         
        <img src="testimonial2.png" alt="testimonial2" className="hover:scale-110 duration-200"/>
          </div>
          <div className="w-[40%] ml-8 mb-8 md:mb-0 mt-10 pt-4">
            <h2 className="text-2xl font-semibold">Easy to manage</h2>
            <h3 className="text-4xl font-bold mt-4">A dashboard to manage all testimonials</h3>
            <p className="text-gray-400 mt-4">
            You will have a simple & clean dashboard to manage all testimonials in one place. It&#39;s like your email inbox, but it&#39;s designed for your social proof!
            </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Try it for free
            </button>
          </div>
        
      </div>

      <div className="flex justify-around ">
        <div className="w-[40%] ml-8 mb-8 md:mb-0 mt-10 pt-4">
            <h2 className="text-2xl font-semibold">Track the metrics</h2>
            <h3 className="text-4xl font-bold mt-4">Understand how video testimonials are performing</h3>
            <p className="text-gray-400 mt-4">
            Track the metrics from all embedded videos, help your marketing team understand the performance at a glance, even promote the best-performing videos to different marketing channels.
            </p>
            <p className="text-gray-400 mt-2 text-sm">
            *Available in the Future   </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Try it for free
            </button>
          </div>
        <div className=" w-[40%] mr-8 flex flex-col md:flex-row items-center justify-between  shadow-lg ">
       
         
        <img src="testimonial3.png" alt="testimonial3" className="hover:scale-110 duration-200"/>
          </div>
        
      </div>
      </div>
    </div>

  <Card1/>
  <Card2/>
  <Card3/>
  <Card4/>

    </>
  );
}



