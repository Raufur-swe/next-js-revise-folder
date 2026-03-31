'use client'
import tokyo from "@/ássets/tokyo.jpg"
import japan from "@/ássets/japan.jpg"
import newyork from "@/ássets/newyork.jpg"
import { useParams } from 'next/navigation'
import React from 'react'
import Image from "next/image"
const page = () => {
  
  const {city} = useParams()
    return (
    <div className='mt-35 text-white ' >
      {city} is beautiful city 
      {
        city === "Tokyo" && <Image src={tokyo} alt = "tokyo" width={400} height={500}  />
      }
      {
        city === "Japan" && <Image src={japan} alt = "tokyo" width={400} height={500}  />
      }
      {
        city === "NewYork" && <Image src={newyork} alt = "tokyo" width={400} height={500}  />
      }
      
    </div>
  )
}

export default page