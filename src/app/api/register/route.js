
import { NextResponse } from "next/server";
import { z } from 'zod';

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&$#])[A-Za-z\d@$!%*?&$#]+$/),
});

export async function POST(req, res) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    // Handle registration logic (e.g., save user to database)
    return NextResponse.json({ data: "تم التسجيل بنجاح" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
        // console.log('error.issues', error.issues)
        const issues = {}
        error.issues.forEach(_=>{
            issues[_.path[0]]= _.code
        })
        // console.log('error.issues', issues)
        // Handle specific validation errors
      if (issues.email) {
        return NextResponse.json({ message: 'بريد الكتروني غير صالح' }, { status: 200 });
      } else if (issues.password) {
        return NextResponse.json({ message: 'يجب ان تحتوي كلمة السر على 8 احرف على الأقل، تتضمن حرف كبير وحرف صغير ورمز ورقم' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'فشل التحقق' }, { status: 200 });
      }
    } else {
        return NextResponse.json({ message: 'خطأ داخلي' }, { status: 200 });
    }
  }
}