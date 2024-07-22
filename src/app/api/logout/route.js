
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request, response) {
    // const origin = request.url;

    try{
        cookies().delete('jwt_token');
        cookies().delete('jwt_token', {secure: true, sameSite: "None"});
        cookies().delete('jwt_token', {secure: true, sameSite: "None", domain: "arabhardware.com"});
        cookies().delete('jwt_token', {secure: true, sameSite: "None", domain: ".arabhardware.com"});
        cookies().delete('jwt_token', {secure: true, sameSite: "None", domain: ".arabhardware.net"});
        cookies().delete('test');
        cookies().delete('test1');
        cookies().delete('test2');
            // Return the token
            return NextResponse.json(response, { status: 200 });
        // } else {
            // return NextResponse.json({ message: 'Unauthorized request' }, { status: 401 }); // Unauthorized origin
        // }
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 500 }); // Unauthorized origin
    }
}