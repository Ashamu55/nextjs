import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div>
  <div className="flex flex-wrap items-center justify-between w-full bg-slate-900 p-4">
    <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
      <Link href="/" className="hover:text-gray-300">
        <h1 className="font-black text-xl md:ml-36">Home</h1>
      </Link>
    </div>

    <div className="w-full md:w-auto flex justify-center md:justify-end space-x-6 md:space-x-20 italic font-black md:mr-28">
      <Link href="/login" className="hover:text-gray-300">
        Welcome to Dashboard
      </Link>
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard