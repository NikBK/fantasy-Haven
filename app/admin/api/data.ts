import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export const fetchDashboardData = async () => {
    noStore();

    try {
        const userCount = await sql`
            SELECT
            (SELECT COUNT(*) FROM fantasyusers WHERE role='user') AS total_users,
            (SELECT COUNT(*) FROM fantasytransactions) AS total_transactions;    
        `
        // console.log(userCount.rows[0]);

        return userCount.rows[0];
    } catch (error) {
        console.log("Error while fetch users count ", error);
        throw new Error("Error while fetch users count " + error);
    }
}
