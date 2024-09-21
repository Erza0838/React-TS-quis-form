import React from "react"
import { useSession } from "next-auth/react"


export default function LoginFormComponent() 
{
  const {data: session } = useSession()
  return (
    <>
        {session ? (
            <>
                <h1>Halo</h1>
            </>
        ) : (
            <>
            
            </>
        )}
    </>
  )
}
