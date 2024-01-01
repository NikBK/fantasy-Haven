'use server';

import { sql } from "@vercel/postgres";
import { createUserType, playersDetailsType } from "@/app/lib/typeDefinition";

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



// FETCH MATCH DETAILS
export async function fetchMatchDetails(match_id: string) {
    try {
        const matchDetail = await sql`
            SELECT ft.Team_name, ft.Players_list
            FROM fantasymatches AS fm
            JOIN fantasyteams AS ft
            ON fm.Team1_id = ft.Team_id OR fm.Team2_id = ft.Team_id
            WHERE fm.match_id = ${match_id}
        `;
        // console.log(matchDetail.rows);

        return matchDetail.rows;
    } catch (error) {
        console.error('Failed to fetch live matches:', error);
        throw new Error('Failed to fetch live matches.');
    }
}



// FETCH PLAYERS DETAILS FOR A MATCH
export async function fetchPlayersDetails(match_id: string): Promise<playersDetailsType[]> {
    try {
        const matchDetail = await sql<playersDetailsType>`
            SELECT fp.player_id AS player_id, fp.Player_name AS player_name, fp.role as role, fp.team_name AS team_name 
            FROM fantasyplayers AS fp 
            JOIN fantasymatches AS fm 
            ON fm.team1_id = fp.team_id OR fm.team2_id = fp.team_id 
            WHERE fm.match_id = ${match_id};
        `;
        // console.log(matchDetail.rows);

        return matchDetail.rows;
    } catch (error) {
        console.error('Failed to fetch players info:', error);
        throw new Error('Failed to fetch players info.');
    }
}