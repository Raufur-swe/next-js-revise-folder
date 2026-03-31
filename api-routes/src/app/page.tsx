'use client'
import React, { useEffect, useState } from 'react'

const page = () => {

  type User = {
    id: number
    name: string
  }

  const [users, setUsers] = useState<User[]>([])

  const fetchUser = async () => {
    try {
      const res = await fetch("/api/user")
      if (!res.ok) {
        throw new Error("Failed")
      }
      const data = await res.json()
      setUsers(data)
    } catch (error) {
      console.log('Error:', error)
    }
  }
  useEffect(() => {
    fetchUser()
  }, [])
  //post data
  const addUser = async()=>{
    const res = await fetch("api/user",{
      method : "POST",
      body : JSON.stringify({name : "karim"})
    })
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      {users.map(u => (
        <p key={u.id} >{u.name}</p>
      ))}
    </div>
  )
}

export default page
