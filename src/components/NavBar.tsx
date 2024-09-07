"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { User } from "next-auth";

function NavBar() {
  const { data: session } = useSession();
  const user: User = session?.user as User;

  return (
    
    <div className="bg-gray-900 text-white  p-6">
    <nav className="flex justify-between items-center">
      <div className="text-2xl font-bold flex items-center">
        <span role="img" aria-label="thumbs up" className="mr-2">👍</span> Testimonial
      </div>
      <div className="flex space-x-6 text-gray-400">
        <a href="#customers" className="hover:text-white">Customers</a>
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#integrations" className="hover:text-white">Integrations</a>
        <a href="#pricing" className="hover:text-white">Pricing</a>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-400 hover:text-white">Sign in</button>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded">Sign up</button>
      </div>
    </nav>

    
  </div>
  );
}

export default NavBar;























// <nav className="p-4 md:p-6 shadow-md bg-[#49243E] text-white">
    //   <div className="container mx-auto flex flex-row justify-between items-center">
    //     <a href="/" className="text-xl font-bold mb-4 md:mb-0 uppercase ">
    //       Speak Secrets
    //     </a>
    //     {session ? (
    //       <div className="flex items-center">
    //         <span className="mr-4 hidden md:block">
    //           Welcome, {user.username || user.email}
    //         </span>
    //         <Button
    //           onClick={() => signOut()}
    //           className="w-full md:w-auto bg-slate-100 text-black"
    //           variant="outline"
    //         >
    //           Logout
    //         </Button>
    //       </div>
    //     ) : (
    //       <Link href="/sign-in">
    //         <Button
    //           className="w-full md:w-auto bg-slate-100 text-black"
    //           variant={"outline"}
    //         >
    //           Login
    //         </Button>
    //       </Link>
    //     )}
    //   </div>
    // </nav>
