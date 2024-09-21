"use client"
import React from "react"
import { signOut, useSession } from "next-auth/react"
import { signIn } from "next-auth/react"

export default function LoginFormComponent() 
{
  const {data: session } = useSession() 
  return (
    <>
        {session ? (
            <>
                {/* <img src={session.user?.image as string} className="rounded-full h-10"/> */}
                <div className="flex flex-col">
                    <h1 className="text-black">{session.user?.name}</h1>
                    <h1 className="text-black">{session.user?.email}</h1>
                    <button className="border border-red-600 rounded-lg text-red-600 w-16"
                    onClick={() => signOut()}>Logout</button>
                </div>
            </>
        ) : (
            <>
                <div className="flex justify-center">
                    <div className="flex flex-col">
                        <h1 className="text-red-500 font-bold">Anda belum login</h1>
                        <div className="flex flex-row gap-5">
                            <button onClick={() => signIn("google")} className="border border-black rounded-lg text-black w-16">Login Google</button>
                            <button onClick={() => signIn("github")} className="border border-black rounded-lg text-black w-16">Login github</button>
                        </div>
                    </div>
                </div>
            </>
        )}
    </>
  )
}
