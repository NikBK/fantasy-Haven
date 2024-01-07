import { sql } from "@vercel/postgres";
import { currentBalanceType, earningsHistoryType, earningsType, liveMatchType, pastMatchType, playersDetailsType, transactionHistoryType, upcomingMatchType, userTeamType, userType } from "@/app/lib/typeDefinition";
import { unstable_noStore as noStore } from 'next/cache';
import { getServerSession } from "next-auth";

const ITEMS_PER_PAGE = 5;

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
    // Add noStore() here prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const earnings = await sql<earningsType>`
            SELECT 
                COALESCE(SUM(CASE WHEN result = 'won' THEN amount ELSE 0 END), 0) AS total_earnings, 
                COALESCE(COUNT(*), 0) AS total_matches,
                COALESCE(SUM(CASE WHEN result = 'won' THEN 1 ELSE 0 END), 0) AS total_matches_won
            FROM fantasyearnings WHERE user_id=${user?.id}
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
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const totalPages = await sql`SELECT COUNT(*) AS total_pages FROM fantasyearnings WHERE user_id=${user?.id}`;
        // console.log(totalPages.rows[0]);

        return Math.ceil(totalPages.rows[0].total_pages / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Failed to fetch earnings page:', error);
        throw new Error('Failed to fetch earnings page.');
    }
}

export async function fetchEarningsHistory(currentPage: number): Promise<earningsHistoryType[]> {
    noStore();

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const earningsHistory = await sql<earningsHistoryType>`
            SELECT earning_id AS id, teams, date, amount, result FROM fantasyearnings 
            WHERE user_id = ${user?.id}
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
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const totalPages = await sql`SELECT COUNT(*) AS total_pages FROM fantasytransactions WHERE user_id=${user?.id}`;
        // console.log(totalPages.rows[0]);

        return Math.ceil(totalPages.rows[0].total_pages / ITEMS_PER_PAGE);
    } catch (error) {
        console.error('Failed to fetch transactions page:', error);
        throw new Error('Failed to fetch transactions page.');
    }
}

export async function fetchTransactionsHistory(currentPage: number): Promise<transactionHistoryType[]> {
    noStore();

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const transactionsHistory = await sql<transactionHistoryType>`
            SELECT transaction_id AS id, date, transaction_type AS type, amount FROM fantasytransactions 
            WHERE user_id = ${user?.id}
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
    noStore();

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const currentBalance = await sql<currentBalanceType>`
        SELECT COALESCE(SUM(CASE WHEN condition = 'added' OR condition = 'won' THEN amount ELSE -amount END), 0) AS current_balance
        FROM (
            SELECT amount, transaction_type AS condition FROM fantasytransactions 
            WHERE user_id =  ${user?.id}

            UNION ALL

            SELECT amount, result AS condition FROM fantasyearnings 
            WHERE user_id =  ${user?.id}
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
    noStore();
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
    noStore();

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const matches = await sql<pastMatchType>`
            SELECT 
                fm.match_id AS id, fm.match_time AS time, fm.score,  
                fe.teams, fe.amount, fe.result
            FROM fantasymatches fm
            JOIN fantasyearnings fe ON fm.match_id = fe.match_id
            WHERE fm.match_type = 'past' AND fe.user_id = ${user?.id}
            ORDER BY fm.match_time DESC;
        `;
        // console.log(matches.rows)

        return matches.rows;
    } catch (error) {
        console.error('Failed to fetch past matches:', error);
        throw new Error('Failed to fetch past matches.');
    }
}



// FETCH LIVE MATCHES
export async function fetchLiveMatches(): Promise<liveMatchType[]> {
    noStore();

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

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



// FETCH USER TEAM
export async function fetchUserTeam(match_id: string): Promise<userTeamType> {
    noStore();

    try {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);

        const userTeam = await sql<userTeamType>`
            SELECT team_id, team FROM fantasyuserteams
            WHERE user_id=${user?.id}
            AND match_id=${match_id}
        `;
        // console.log(userTeam.rows[0]);

        return userTeam.rows[0];
    } catch (error) {
        console.error('Failed to fetch userTeam:', error);
        throw new Error('Failed to fetch userTeam.');
    }
}