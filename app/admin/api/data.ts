import { dashboardDataType, usersType } from "@/app/lib/typeDefinition";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

const ITEMS_PER_PAGE = 10;

export const fetchDashboardData = async (): Promise<dashboardDataType> => {
    noStore();

    try {
        const userCount = await sql<dashboardDataType>`
            SELECT
                (SELECT COUNT(*) FROM fantasyusers WHERE role='user') AS total_users,
                (SELECT COUNT(*) FROM fantasytransactions) AS total_transactions;    
        `;
        // console.log(userCount.rows[0]);

        return userCount.rows[0];
    } catch (error) {
        console.log("Error while fetch users count ", error);
        throw new Error("Error while fetch users count " + error);
    }
}

export const fetchAllUsers = async (page: number): Promise<usersType[]> => {
    noStore();

    const offset = (page - 1) * ITEMS_PER_PAGE;

    try {
        const users = await sql<usersType>`
            SELECT id, name, email, username FROM fantasyusers
            WHERE role = 'user'
            LIMIT ${ITEMS_PER_PAGE}
            OFFSET ${offset}
        `;
        // console.log(users.rows);

        return users.rows;
    } catch (error) {
        console.log("Error while fetching all users ", error);
        throw new Error("Error while fetching all users " + error);
    }
}

export const fetchAllAdmins = async () => {
    noStore();

    try {
        const admins = await sql<usersType>`
            SELECT id, name, email, username FROM fantasyusers
            WHERE role = 'admin'
        `;
        // console.log(admins.rows);

        return admins.rows;
    } catch (error) {
        console.log("Error while fetching all admins ", error);
        throw new Error("Error while fetching all admins " + error);
    }
}