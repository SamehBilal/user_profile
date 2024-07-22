
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function GET(request, response) {
    // const origin = request.url;

    try{
        // cookies().set('token', 'shaza', { secure: true, sameSite: "None" })
        // if (allowedOrigins.includes(origin)) {
            const cookieStore = cookies()
            const token = cookieStore.get('jwt_token')?.value || null
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