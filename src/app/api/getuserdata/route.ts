import { getServerSession } from "next-auth"
import authOptions from "../../../../lib/authOptions"
import { NextResponse } from "next/server"

export const GET = async () => 
{
    const session = await getServerSession(authOptions)
    if(!session)
    {
        return NextResponse.json({ error: "Not authorized" }, { status: 400 })
    }
    return NextResponse.json({ success: session }, {status: 200})
}