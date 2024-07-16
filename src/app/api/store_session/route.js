
import { NextResponse } from "next/server";
import axios from "axios";
import { storeSession } from "@/config/api";
import { cookies } from 'next/headers'

export async function  GET(request, response) {
    try{
        // const token = request?.cookies?.get('token')?.value?.split(' ')[1] ?? 'null'
        let data = { message: "faild retriving session id" }
        // console.log('token', token)
        await axios.get(`${storeSession}`,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(res=>{
            const resData = res.data
            const status = resData.status
            const sessionId = resData?.data?.session_id
            if(status){ 
                if(sessionId){
                    data = {data: sessionId}
                    return NextResponse.json({data: sessionId}, { status: 200 });
                }else{
                    return NextResponse.json(data, { status: 500 })
                }
            }else{
                return NextResponse.json(data, { status: 500 })
            }
        }).catch(e=>{
            return NextResponse.json({ message: e }, { status: 500 })
        })
        return NextResponse.json(data, { status: 200 })
  
    }catch (e) {
        console.log('e', e)
        return NextResponse.json({ message: e }, { status: 500 })
    }
}