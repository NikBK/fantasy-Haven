import { sql } from "@vercel/postgres";

const ITEMS_PER_PAGE = 10;

export async function getUserByEmail(email: string) {
    try {
        const user = await sql`SELECT * FROM fantasyusers WHERE email=${email}`;
        // console.log(user.rows[0]);

        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}



// EARNINGS TABLE RELATED QUERIES

export async function fetchEarnings() {
    const user = await getUserByEmail('nikhil@gmail.com');

    try {
        const earnings = await sql`
            SELECT 
                COALESCE(SUM(CASE WHEN result = 'won' THEN amount ELSE 0 END), 0) AS total_earnings, 
                COALESCE(COUNT(*), 0) AS total_matches,
                COALESCE(SUM(CASE WHEN result = 'won' THEN 1 ELSE 0 END), 0) AS total_matches_won
            FROM fantasyearnings WHERE user_id=${user.id}
        `;
        // console.log(earnings.rows[0]);

        return earnings.rows[0];
    } catch (error) {
        console.error('Failed to fetch earnings:', error);
        throw new Error('Failed to fetch earnings.');
    }
}

export async function fetchEarningsPages() {
    try {
        const totalPages = await sql`SELECT COUNT(*) AS total_pages FROM fantasyearnings`;
        // console.log(totalPages.rows[0]);

        return Math.ceil(totalPages.rows[0].total_pages / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Failed to fetch earnings page:', error);
        throw new Error('Failed to fetch earnings page.');
    }
}

export async function fetchEarningsHistory(currentPage: number) {
    const user = await getUserByEmail('nikhil@gmail.com');

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const earningsHistory = await sql`
            SELECT earning_id AS id, teams, date, amount, result FROM fantasyearnings 
            WHERE user_id = ${user.id}
            ORDER BY date DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
        // console.log(earningsHistory.rows);

        return earningsHistory.rows;
    } catch (error) {
        console.error('Failed to fetch earnings history:', error);
        throw new Error('Failed to fetch earnings history.');
    }
}




// TRANSACTIONS TABLE RELATED QUERIES

export async function fetchTransactionsPages() {
    try {
        const totalPages = await sql`SELECT COUNT(*) AS total_pages FROM fantasytransactions`;
        // console.log(totalPages.rows[0]);

        return Math.ceil(totalPages.rows[0].total_pages / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Failed to fetch transactions page:', error);
        throw new Error('Failed to fetch transactions page.');
    }
}

export async function fetchTransactionsHistory(currentPage: number) {
    const user = await getUserByEmail('nikhil@gmail.com');

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const transactionsHistory = await sql`
            SELECT transaction_id AS id, date, transaction_type AS type, amount FROM fantasytransactions 
            WHERE user_id = ${user.id}
            ORDER BY date DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
        // console.log(transactionsHistory.rows);

        return transactionsHistory.rows;
    } catch (error) {
        console.error('Failed to fetch transactions history:', error);
        throw new Error('Failed to fetch transactions history.');
    }
}




// GET BALANCE BY ADDING AND SUBTRACTING TRANSACTIONS AND EARNIGNS TABLES

export async function fetchCurrentBalance() {
    const user = await getUserByEmail('nikhil@gmail.com');

    try {
        const currentBalance = await sql`
        SELECT COALESCE(SUM(CASE WHEN condition = 'added' OR condition = 'won' THEN amount ELSE -amount END), 0) AS current_balance
        FROM (
            SELECT amount, transaction_type AS condition FROM fantasytransactions 
            WHERE user_id =  ${user.id}

            UNION ALL

            SELECT amount, result AS condition FROM fantasyearnings 
            WHERE user_id =  ${user.id}
        ) AS combined_table;     
        `;
        // console.log(currentBalance.rows[0]);

        return currentBalance.rows[0];
    } catch (error) {
        console.error('Failed to fetch current balance:', error);
        throw new Error('Failed to fetch current balance.');
    }
}