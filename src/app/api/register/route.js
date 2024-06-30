
import { NextResponse } from "next/server";
import { z } from 'zod';

const schema = z.object({
  firstname: z.string(),
  lastname: z.string(),
  email: z.string().email(),
  password: z.string().min(8), // Adjust complexity rules as needed
});

// To handle a GET request to /api
export async function GET(request) {
    // Do whatever you want
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(req, res) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    // Handle registration logic (e.g., save user to database)
    return NextResponse.json({ data: "Registration successful" }, { status: 200 });
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
        return NextResponse.json({ message: 'Invalid email format' }, { status: 200 });
      } else if (issues.password) {
        return NextResponse.json({ message: 'Invalid password' }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'Validation failed' }, { status: 200 });
      }
    } else {
        return NextResponse.json({ message: 'Internal server error' }, { status: 200 });
    }
  }
}