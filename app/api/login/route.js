import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password} = body;

        const validEmail = "admin@test.com";
        const validPass = "admin123";

        if(email !== validEmail || password !== validPass) {
            return NextResponse.json({
                massage: "Invalid email or password"
            })
        }

        const response = NextResponse.json({
            message: "Login Succesfull",
            use: {
                email,
                name: "Admin"
            }
        })

        return response;

    } catch (error) {
        return NextResponse.json({
            message: "Invalid"
        })
    }
}