
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request) {
    const allowedOrigins = [
        'https://arabhardware.com', 
        'https://arabhardware.net', 
        'https://user-profile-lyart.vercel.app/api/refresh', 
        'http://localhost:3000/api/refresh'
    ];
    const origin = request.url;
    console.log('origin: ', request.url)

    try{
        // if (allowedOrigins.includes(origin)) {
            const cookieStore = cookies()
            const token = cookieStore.get('token')?.value || null
            console.log('token', token)
            const user = (cookieStore.get('user') && cookieStore.get('user').value)? (JSON.parse(cookieStore.get('user')?.value)) :null
            console.log('user', user)

            // Return the token
            return NextResponse.json({ token, user }, { status: 200 });
        // } else {
            // return NextResponse.json({ message: 'Unauthorized request' }, { status: 401 }); // Unauthorized origin
        // }
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 500 }); // Unauthorized origin
    }
}