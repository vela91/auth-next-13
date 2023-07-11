'use client'
import { SessionProvider, signIn, useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  if (!session) {
  return (
    <div className="bg-blue-900 w-screen h-screen flex items-center">

        <button onClick={()=> signIn('google')} className="mx-auto bg-white p-2 px-4 rounded-md" >
          Login with Google
        </button>
    </div>
  )
  }
  return (<>
    <h1>Sign in successful {session.user.name}</h1>
    <button onClick={()=> signOut()} className="mx-auto bg-white p-2 px-4 rounded-md" >
      Sign Out
    </button>
    </>
  )
}
