'use server';

import { CreateMatchFormType, CreateTeamFormType, PlayerType, TeamNameType, TeamType, UncappedPlayerType, userType } from "@/app/lib/typeDefinition";
import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
// import { v4 as uuidv4 } from "uuid";
const { v4: uuidv4 } = require('uuid');

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
    noStore();

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
    noStore();

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

export const getAllUncappedPlayers = async (): Promise<UncappedPlayerType[]> => {
    noStore();

    try {
        const uncappedPlayers = await sql<UncappedPlayerType>`
            SELECT player_id AS id, player_name AS name, role FROM fantasyuncappedplayers;
        `;
        // console.log(uncappedPlayers.rows);

        return uncappedPlayers.rows;
    } catch (error) {
        console.log("Error while fetching all uncapped players. ", error);
        throw new Error("Error while fetching all uncapped players. " + error);
    }
}

export const getAllTeamNames = async (): Promise<TeamNameType[]> => {
    noStore();

    try {
        const teamNames = await sql<TeamNameType>`
            SELECT team_name AS name FROM fantasyteams;
        `;
        // console.log(teamNames.rows);

        return teamNames.rows;
    } catch (error) {
        console.log("Error while fetching all team names. ", error);
        throw new Error("Error while fetching all team names. " + error);
    }
}

export const createTeam = async (formData: CreateTeamFormType) => {
    noStore();

    try {
        const team_id = uuidv4();
        const team_name = formData.name;
        const playersList = JSON.stringify(formData.selectedPlayers);

        const createdTeam = await sql`
            INSERT INTO fantasyteams (team_id, team_name, players_list)
            VALUES (${team_id}, ${formData.name}, ${playersList});
        `;
        // console.log(createdTeam.rows);

        createPlayers(formData.selectedPlayers, { team_id, team_name });

        return createdTeam.rows;
    } catch (error) {
        console.log("Error while creating the new team. ", error);
        throw new Error("Error while creating the new team. " + error);
    }
}

export const createPlayers = async (playersList: PlayerType[], teamDetails: { team_id: string; team_name: string; }) => {
    noStore();

    try {
        playersList.forEach(async player => {
            const createdPlayer = await sql`
                INSERT INTO fantasyplayers (player_id, player_name, role, team_id, team_name)
                VALUES (${player.player_id}, ${player.player_name}, ${player.role}, ${teamDetails.team_id}, ${teamDetails.team_name});
            `;
            // console.log(createdTeam.rows);
        })

        deleteUncappedPlayers(playersList);

        return;
    } catch (error) {
        console.log("Error while creating the new player. ", error);
        throw new Error("Error while creating the new player. " + error);
    }
}

export const deleteUncappedPlayers = async (playersList: PlayerType[]) => {
    noStore();

    try {
        playersList.forEach(async player => {
            const deletedPlayer = await sql`
                DELETE FROM fantasyuncappedplayers WHERE player_id=${player.player_id};
            `;
            // console.log(deletedPlayer.rows);
        })

        return;
    } catch (error) {
        console.log("Error while creating the new player. ", error);
        throw new Error("Error while creating the new player. " + error);
    }
}