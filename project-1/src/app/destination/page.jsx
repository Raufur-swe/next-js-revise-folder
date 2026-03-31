'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
const page = () => {
const router = useRouter()
  const destination = ["Tokyo", "Japan", "NewYork"]
  return (
    <div className=' flex flex-col gap-4  h-full  text-white justify-center items-center ' >
      <div className='text-3xl font-bold' >
        Choose your destinations
      </div>
      <div className='flex flex-col gap-5 font-medium' >
        {destination.map((d, i) => (
          <div key={i} className='bg-white rounded-lg p-2 flex text-black items-center justify-center text-xl cursor-pointer hover:bg-gray-500 transition-all' onClick={()=>router.push(`/destination/${d}`)}>{d}</div>
        ))}
      </div>
    </div>
  )
}

export default page