
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request, response) {
    // const origin = request.url;

    try{
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set("Access-Control-Allow-Origin", "*")

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
        let i = 0
        setInterval(() => {
            response.postMessage({i, token}, "*");
        }, 5000);
        
        return NextResponse.json(token, { status: 200 });
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 500 }); // Unauthorized origin
    }
}