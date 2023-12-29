'use server';

import { sql } from "@vercel/postgres";
import { createUserType } from "@/app/lib/typeDefinition";

export async function createUser({ name, email, hashedPassword, userName }: createUserType) {
    try {
        const user = await sql`
            INSERT INTO fantasyusers (name, email, password, username)
            VALUES (${name}, ${email}, ${hashedPassword}, ${userName})
            ON CONFLICT (id) DO NOTHING;
        `;
        // console.log(user.rows[0]);

        return user.rows[0];
    } catch (error) {
        console.error('Failed to create user:', error);
        throw new Error('Failed to create user.');
    }
}