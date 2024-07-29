
import { NextResponse } from "next/server";
import parsePhoneNumberFromString from 'libphonenumber-js'
import { z } from 'zod';

let country = 'SY'

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  phone: z.string()
  .transform((arg, ctx) => {
    const phone = parsePhoneNumberFromString(arg, {
      defaultCountry: country??'SY',
      extract: false,
    });
    if (phone && phone.isValid()) { // when it's good
      // console.log('phone', phone.number, phone.isValid(), typeof phone.number)
      return phone.number;
    }
    ctx.addIssue({ // when it's not
      code: z.ZodIssueCode.custom,
      message: 'Invalid phone number',
    });
    return z.NEVER;
  })
  ,
  password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
});

export async function POST(req, res) {
  try {
    const body = await req.json();
    country = body?.country?.toUpperCase()
    const parsed = schema.parse(body);
    // Handle registration logic
    return NextResponse.json({ data: "تم التسجيل بنجاح" }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
        const issues = {}
        error.issues.forEach(_=>{
            issues[_.path[0]]= _.code
        })
      // Handle specific validation errors
      if (issues.email) {
        console.log('issues.email', issues.email)
        return NextResponse.json({ message: 'بريد الكتروني غير صالح' }, { status: 200 });
      } else if (issues.phone) {
        return NextResponse.json({ message: 'يرجى ادخال رقم هاتف صالح' }, { status: 200 });
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