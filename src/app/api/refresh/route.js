
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request, response) {
    // const origin = request.url;

    try{
        const requestHeaders = new Headers(request.headers)
        headers.set("Access-Control-Allow-Origin", "*");
        headers.set("Content-Security-Policy", "frame-ancestors 'self' *");
        headers.set("Age", "3000");
        headers.set("Cache-Control", "max-age=3000");
        headers.set("X-Frame-Options", "ALLOW-FROM *");
        headers.set("Access-Control-Allow-Credentials", "true");
        headers.set("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
        headers.set("Access-Control-Allow-Headers", "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date");



        const cookieStore = cookies()
        let token = cookieStore.get('jwt_token')?.value?? ''
        if(token && token.length<10){
            token = ''
            cookieStore.delete('jwt_token', {secure: true, sameSite: "None", domain: ".arabhardware.com"})
            cookieStore.delete('jwt_token');
        }
        
        return NextResponse.json(token, { status: 200, headers: requestHeaders });
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 500 }); // Unauthorized origin
    }
}