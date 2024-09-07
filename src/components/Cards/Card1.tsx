import React from 'react'

export const Card1 = () => {
  return (
   
        
        <div className=" w-[30%] mr-8 flex flex-col  items-center justify-center  shadow-lg bg-[#3B3D41] p-4 rounded-md ">
       
          <div className='flex gap-4 justify-between items-center text-white'>
        <img src="profile2.jpg" alt="testimonial1" className="w-[50px] h-[50px]  rounded-full object-cover"/>
        <span>
            <h1 className='font-bold text-lg'>Hina sehgal</h1>
            <p className='font-extralight text-sm'>Head of Customer Marketing & Community, tinco</p>
        </span>
          </div>
          <p className='p-2 text-white'><span className='bg-[#F5F5DC] text-black'> I LOVE Testimonial and so does our entire company!</span> In just one month of being a customer, I&apos;ve been thoroughly impressed by the speed of innovation and new features released. The team is constantly open to my feedback and not only listens to what I have to say but makes my ideas happen.</p>
         
      
       <div className='font-bold text-[35px] '><span className='text-red-700'>t</span>inco</div>
         
    </div>
  )
}