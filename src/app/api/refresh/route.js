
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request, response) {
    // const origin = request.url;

    try{
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set("Access-Control-Allow-Origin", "*")
        requestHeaders.set("Content-Security-Policy", "frame-ancestors 'self' *")
        requestHeaders.set('Age', '3000')
        requestHeaders.set('cache-control', '3000')
        requestHeaders.set('X-Frame-Options', 'allow-from *')
        requestHeaders.set('Access-Control-Allow-Credentials', 'true')
        requestHeaders.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
        requestHeaders.set('Access-Control-Allow-Headers', 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date')
    
        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })


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