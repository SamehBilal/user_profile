
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'

export async function POST(request, response) {
    try{
        cookies().set('jwt_token', "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.com", maxAge: 0})
        cookies().set('jwt_token', "deleted", {secure: true, sameSite: "None", domain: "arabhardware.com", maxAge: 0})
        // cookies().set('jwt_token', "deleted", {secure: true, sameSite: "None", domain: ".arabhardware.net", maxAge: 0})
        cookies().delete('jwt_token');
        cookies().delete('jwt_token', {secure: true, sameSite: "None"});
        cookies().delete('jwt_token', {secure: true, sameSite: "None", domain: "arabhardware.com"});
        cookies().delete('jwt_token', {secure: true, sameSite: "None", domain: ".arabhardware.com"});
        // cookies().delete('jwt_token', {secure: true, sameSite: "None", domain: ".arabhardware.net"});
        return NextResponse.json(response, { status: 203 });
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 500 }); // Unauthorized origin
    }
}