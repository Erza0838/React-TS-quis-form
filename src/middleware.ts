import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) 
{
    const Token = request.cookies.get("session")
    console.log(Token)
}