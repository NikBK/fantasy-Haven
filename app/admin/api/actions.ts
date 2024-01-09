'use server';

import { userType } from "@/app/lib/typeDefinition";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function getUserByID(id: string): Promise<userType> {
    noStore();

    try {
        const user = await sql<userType>`
            SELECT * FROM fantasyusers WHERE id=${id}
        `;
        // console.log(user.rows[0]);

        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export async function updateUserRole(id: string, role: string) {
    noStore();

    try {
        const updatedUser = await sql`
            UPDATE fantasyusers
            SET role = ${role}
            WHERE id = ${id}
        `;
        // console.log(updatedUser.rows[0]);

        return updatedUser.rows[0];
    } catch (error) {
        console.error('Failed to update user:', error);
        throw new Error('Failed to update user.');
    }
}

export const deleteUser = async (user_id: string) => {
    noStore();

    try {
        const deletedUser = await sql`
            DELETE FROM fantasyusers WHERE id = ${user_id}
        `;
        // console.log(deleteUser.rows[0]);

        return deletedUser.rows[0];
    } catch (error) {
        console.log("Error while deleteing the user. ", error);
        throw new Error("Error while deleteing the user. " + error);
    }
}