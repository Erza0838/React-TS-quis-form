"use client"
import React from "react"
import { signOut, useSession } from "next-auth/react"

export default function ProfilePage() 
{
  const {data: session} = useSession()
  return (
    <>
    {session ? (
        <>
          <h2 className="text-white">Halaman profile</h2>      
            <div className="flex flex-col">
                  <h1 className="text-white">Email : {session?.user?.email}</h1>
                  <h1 className="text-white">Username : {session?.user?.name}</h1>
                  <button className="border border-red-600 rounded-lg text-white w-16"
                  onClick={() => signOut()}>Logout</button>
            </div>
        </>
    ) : (
        <h2 className="text-white">Profile kosong</h2>             
    )}
    </>

  )
}
