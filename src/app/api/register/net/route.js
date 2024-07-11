
import { NextResponse } from "next/server";
import axios from "axios";
import { storeLoginDomain } from "@/config/api";
import { cookies } from 'next/headers'
import { callBack } from "@/config/api";

export async function  GET(request, response) {
    try{
        return NextResponse.json({ data: 'hello' }, { status: 200 })
  
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 400 });
    }
}