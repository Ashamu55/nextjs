import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
          <div className="flex flex-wrap items-center justify-between w-full bg-slate-900 p-4">
                <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                      <h1 className="font-black text-xl md:ml-36">Home</h1>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-20 w-full md:w-auto italic font-black md:mr-28">
                      <Link href="/signup" className="hover:text-gray-300">Signup</Link>
                      <Link href="/login" className="hover:text-gray-300">Login</Link>
                      <Link href="/dashboard" className="hover:text-gray-300 text-ellipsis">Dashboard</Link>
                </div>
        </div>
    </div>
  )
}

export default Navbar