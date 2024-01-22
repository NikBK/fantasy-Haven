'use server';

import { CreateMatchFormType, TeamType, userType } from "@/app/lib/typeDefinition";
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

export const getAllTeams = async (): Promise<TeamType[]> => {
    try {
        const teams = await sql<TeamType>`
            SELECT team_id AS id, team_name AS name, players_list FROM fantasyteams;
        `;
        // console.log(teams.rows);

        return teams.rows;
    } catch (error) {
        console.log("Error while fetching all teams. ", error);
        throw new Error("Error while fetching all teams. " + error);
    }
}

export const createMatch = async (formData: CreateMatchFormType) => {
    try {
        const createdMatch = await sql`
            INSERT INTO fantasymatches (team1_id, team2_id, team1_name, team2_name, match_time, contest_amount, slots, match_type)
            values (${formData.team1_id}, ${formData.team2_id}, ${formData.team1}, ${formData.team2}, ${formData.time}, ${formData.amount}, ${formData.slots}, 'upcoming')
        `;
        // console.log(createdMatch.rows);

        return createdMatch.rows;
    } catch (error) {
        console.log("Error while creating a match. ", error);
        throw new Error("Error while creating a match. " + error);
    }
}