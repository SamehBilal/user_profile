
import { NextResponse } from "next/server";
import axios from "axios";
import { storeLoginDomain } from "@/config/api";
import { cookies } from 'next/headers'

export async function  GET(request, response) {
    try{
        const token = request?.cookies?.get('token')?.value?.split(' ')[1] ?? 'null'
        let data = null
        console.log('token', token)
        await axios.post(`${storeLoginDomain}`,
            { token },
            { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }}
        ).then(res=>{
            if(res.status){ 
                console.log('success', res.data);
                data=res.data
            }
        }).catch(e=>{
            console.log('e', e)
            console.log({ data: null }, { status: 200 });
        })
        console.log('data', data)
        return NextResponse.json({ data }, { status: 200 })
  
    }catch (error) {
        console.log('error', error)
        return NextResponse.json({ message: 'Server Error'+error.message }, { status: 400 });
    }
}