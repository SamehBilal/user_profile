
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request, response) {
    // const origin = request.url;

    try{
        
    // const allowedOrigins = ['*', 'http://localhost:5500']; //add only what we need
    // const origin = request.headers.get('Origin');
    // if (allowedOrigins.includes(origin)) {
    //     requestHeaders.set("Access-Control-Allow-Origin", origin);
    // } else {
    //     requestHeaders.set("Access-Control-Allow-Origin", origin); // here add null for example
    // }
    
    const requestHeaders = new Headers(request.headers)

    requestHeaders.set("Access-Control-Allow-Origin", '*');
    requestHeaders.set("Content-Security-Policy", "frame-ancestors 'self' *"); 
    requestHeaders.set("Age", "3333");
    requestHeaders.set("Cache-Control", "max-age=3333");
    requestHeaders.set("X-Frame-Options", "ALLOW-FROM *");
    requestHeaders.set("Access-Control-Allow-Credentials", "true");
    requestHeaders.set("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
    requestHeaders.set("Access-Control-Allow-Headers", "Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date");



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