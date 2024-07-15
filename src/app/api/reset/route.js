
import { NextResponse } from "next/server";
import { z } from 'zod';

const schema = z.object({
  password1: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
});

// To handle a GET request to /api
export async function GET(request) {
    // Do whatever you want
    return NextResponse.json({ message: "مرحبا بالعالم" }, { status: 200 });
}

export async function POST(req, res) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    // Handle registration logic (e.g., save user to database)
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
        // console.log('error.issues', error.issues)
        const issues = {}
        error.issues.forEach(_=>{
            issues[_.path[0]]= _.code
        })
      if (issues.password1) {
        return NextResponse.json({ 
          success: false,
          message: 'يجب ان تحتوي كلمة السر على 8 احرف على الأقل، تتضمن حرف كبير وحرف صغير ورمز ورقم'
        }, { status: 200 });
      } else {
        return NextResponse.json({ success: false, message: 'فشل التحقق' }, { status: 200 });
      }
    } else {
        return NextResponse.json({ success: false, message: 'خطأ داخلي' }, { status: 200 });
    }
  }
}