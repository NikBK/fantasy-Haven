import { sql } from "@vercel/postgres";
import { currentBalanceType, earningsHistoryType, earningsType, liveMatchType, pastMatchType, transactionHistoryType, upcomingMatchType, userType } from "@/app/lib/typeDefinition";

const ITEMS_PER_PAGE = 10;

export async function getUserByEmail(email: string): Promise<userType> {
    try {
        const user = await sql<userType>`SELECT * FROM fantasyusers WHERE email=${email}`;
        // console.log(user.rows[0]);

        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}



// EARNINGS TABLE RELATED QUERIES

export async function fetchEarnings(): Promise<earningsType> {
    const user = await getUserByEmail('nikhil@gmail.com');

    try {
        const earnings = await sql<earningsType>`
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

export async function fetchEarningsPages(): Promise<number> {
    try {
        const totalPages = await sql`SELECT COUNT(*) AS total_pages FROM fantasyearnings`;
        // console.log(totalPages.rows[0]);

        return Math.ceil(totalPages.rows[0].total_pages / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Failed to fetch earnings page:', error);
        throw new Error('Failed to fetch earnings page.');
    }
}

export async function fetchEarningsHistory(currentPage: number): Promise<earningsHistoryType[]> {
    const user = await getUserByEmail('nikhil@gmail.com');

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const earningsHistory = await sql<earningsHistoryType>`
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

export async function fetchTransactionsPages(): Promise<number> {
    try {
        const totalPages = await sql`SELECT COUNT(*) AS total_pages FROM fantasytransactions`;
        // console.log(totalPages.rows[0]);

        return Math.ceil(totalPages.rows[0].total_pages / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Failed to fetch transactions page:', error);
        throw new Error('Failed to fetch transactions page.');
    }
}

export async function fetchTransactionsHistory(currentPage: number): Promise<transactionHistoryType[]> {
    const user = await getUserByEmail('nikhil@gmail.com');

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const transactionsHistory = await sql<transactionHistoryType>`
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

export async function fetchCurrentBalance(): Promise<currentBalanceType> {
    const user = await getUserByEmail('nikhil@gmail.com');

    try {
        const currentBalance = await sql<currentBalanceType>`
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





// FETCH UPCOMING MATCHES
export async function fetchUpcomingMatches(): Promise<upcomingMatchType[]> {
    try {
        const matches = await sql<upcomingMatchType>`
            SELECT match_id AS id, team1_name, team2_name, match_time as time, contest_amount AS amount, slots 
            FROM fantasymatches 
            WHERE match_type = 'upcoming'
            AND match_time > CURRENT_TIMESTAMP
            ORDER BY match_time ASC;
        `;
        // console.log(matches.rows)

        return matches.rows;
    } catch (error) {
        console.error('Failed to fetch upcoming matches:', error);
        throw new Error('Failed to fetch upcoming matches.');
    }
}



// FETCH PAST MATCHES
export async function fetchPastMatches(): Promise<pastMatchType[]> {
    const user = await getUserByEmail("nikhil@gmail.com");

    try {
        const matches = await sql<pastMatchType>`
            SELECT 
                fm.match_id AS id, fm.match_time AS time, fm.score,  
                fe.teams, fe.amount, fe.result
            FROM fantasymatches fm
            JOIN fantasyearnings fe ON fm.match_id = fe.match_id
            WHERE fm.match_type = 'past' AND fe.user_id = ${user.id}
            ORDER BY fm.match_time DESC;
        `;
        // console.log(matches.rows)

        return matches.rows;
    } catch (error) {
        console.error('Failed to fetch upcoming matches:', error);
        throw new Error('Failed to fetch upcoming matches.');
    }
}



// FETCH LIVE MATCHES
export async function fetchLiveMatches(): Promise<liveMatchType[]> {
    const user = await getUserByEmail("nikhil@gmail.com");

    try {
        const matches = await sql<liveMatchType>`
            SELECT match_id AS id, team1_name, team2_name, match_time AS time, contest_amount AS amount, score 
            FROM fantasymatches
            WHERE match_type = 'live'
            ORDER BY match_time DESC;
        `;
        // console.log(matches.rows)

        return matches.rows;
    } catch (error) {
        console.error('Failed to fetch live matches:', error);
        throw new Error('Failed to fetch live matches.');
    }
}