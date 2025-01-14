import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
         <div>
        <div className='flex justify-center, justify-between w-100 bg-slate-900 p-2'>
             <div className='ml-36'>
             <Link href="/" className="hover:text-gray-300"><h1 className='font-black'>Home</h1></Link>
             </div>
             <div className='flex space-x-20 mr-28 italic font-black'>
             {/* <Link href="/login" className="hover:text-gray-300">Login</Link> */}
             <Link href="/login" className="hover:text-gray-300">Welcome to Dashboard</Link>
             </div>
         </div>
 </div>
    </div>
  )
}

export default Dashboard