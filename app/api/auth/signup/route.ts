import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { createUser } from "@/app/lib/actions";
import { generateUsername } from "@/app/lib/utils";


export async function POST(request: Request) {
    try {
        const { name, username, email, password } = await request.json();
        // console.log({ name, email, password });

        const hashedPassword = await bcrypt.hash(password, 10);
        const userName = username || generateUsername(name);

        const user = await createUser({ name, email, hashedPassword, userName });

        // console.log(user);
    } catch (error) {
        console.log({ error })
    }
    return NextResponse.json({ message: 'Success' })
}