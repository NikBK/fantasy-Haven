const { db } = require("@vercel/postgres");
const { users, transactions, earnings, teams, players, matches, usersTeams } = require("./placeholderData.ts");
const bcrypt = require('bcrypt');

function generateUsername(name) {
    return name.split(' ').map(word => word[0]).join('');
}

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasyusers (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL,
                username VARCHAR(50),
                role VARCHAR(255) DEFAULT 'user'
            );
        `;

        console.log(`Created "users" table`);

        // Insert data into the "fantasyusers" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                const username = user.username || generateUsername(user.name);
                return client.sql`
                    INSERT INTO fantasyusers (id, name, email, password, username)
                    VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${username})
                    ON CONFLICT (id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedTransactions(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "transactions" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasytransactions (
                transaction_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID NOT NULL,
                date timestamptz NOT NULL,
                transaction_type VARCHAR(255) NOT NULL,
                amount FLOAT DEFAULT 0 NOT NULL,
                transaction_status VARCHAR(20) DEFAULT 'pending' NOT NULL
            );
        `;

        console.log(`Created "transactions" table`);

        // Insert data into the "fantasytransactions" table
        const insertedTrasactions = await Promise.all(
            transactions.map(async (trans) => {
                return client.sql`
                    INSERT INTO fantasytransactions (transaction_id, user_id, date, transaction_type, amount, transaction_status)
                    VALUES (${trans.transaction_id}, ${trans.user_id}, ${trans.date}, ${trans.transaction_type}, ${trans.amount}, ${trans.transaction_status})
                    ON CONFLICT (transaction_id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedTrasactions.length} transactions`);

        return {
            createTable,
            transactions: insertedTrasactions,
        };
    } catch (error) {
        console.error('Error seeding transactions:', error);
        throw error;
    }
}

async function seedEarnings(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "transactions" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasyearnings (
                earning_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID NOT NULL,
                match_id UUID NOT NULL,
                date timestamptz NOT NULL,
                teams VARCHAR(255) NOT NULL,
                amount FLOAT DEFAULT 0 NOT NULL,
                result VARCHAR(20) NOT NULL
            );
        `;

        console.log(`Created "earnings" table`);

        // Insert data into the "fantasyearnings" table
        const insertedEarnings = await Promise.all(
            earnings.map(async (item) => {
                return client.sql`
                    INSERT INTO fantasyearnings (earning_id, user_id, match_id, date, teams, amount, result)
                    VALUES (${item.earning_id}, ${item.user_id}, ${item.match_id}, ${item.date}, ${item.teams}, ${item.amount}, ${item.result})
                    ON CONFLICT (earning_id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedEarnings.length} earnings`);

        return {
            createTable,
            earnings: insertedEarnings,
        };
    } catch (error) {
        console.error('Error seeding earnings:', error);
        throw error;
    }
}

async function seedTeams(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasyteams (
                team_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                team_name VARCHAR(255) NOT NULL,
                players_list TEXT
            );
        `;

        console.log(`Created "teams" table`);

        // Insert data into the "fantasyteams" table
        const insertedTeams = await Promise.all(
            teams.map(async (team) => {
                const playersList = JSON.stringify(team.players_list);

                return client.sql`
                    INSERT INTO fantasyteams (team_id, team_name, players_list)
                    VALUES (${team.team_id}, ${team.team_name}, ${playersList})
                    ON CONFLICT (team_id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedTeams.length} teams`);

        return {
            createTable,
            teams: insertedTeams,
        };
    } catch (error) {
        console.error('Error seeding teams:', error);
        throw error;
    }
}

async function seedPlayers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "players" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasyplayers (
                player_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                player_name VARCHAR(255) NOT NULL,
                role VARCHAR(255) NOT NULL,
                team_id UUID NOT NULL,
                team_name VARCHAR(255) NOT NULL
            );
        `;

        console.log(`Created "players" table`);

        // Insert data into the "fantasyplayers" table
        const insertedPlayers = await Promise.all(
            players.map(async (player) => {
                return client.sql`
                    INSERT INTO fantasyplayers (player_id, player_name, role, team_id, team_name)
                    VALUES (${player.player_id}, ${player.player_name}, ${player.role}, ${player.team_id}, ${player.team_name})
                    ON CONFLICT (player_id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedPlayers.length} players`);

        return {
            createTable,
            players: insertedPlayers,
        };
    } catch (error) {
        console.error('Error seeding players:', error);
        throw error;
    }
}

async function seedMatches(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "matches" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasymatches (
                match_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                team1_id UUID NOT NULL,
                team2_id UUID NOT NULL,
                team1_name VARCHAR(255) NOT NULL,
                team2_name VARCHAR(255) NOT NULL,
                match_time timestamptz NOT NULL,
                contest_amount FLOAT DEFAULT 0,
                slots INT NOT NULL,
                score VARCHAR(255),
                result VARCHAR(255),
                match_type VARCHAR(20) NOT NULL
            );
        `;

        console.log(`Created "matches" table`);

        // Insert data into the "fantasymatches" table
        const insertedMatches = await Promise.all(
            matches.map(async (match) => {
                return client.sql`
                    INSERT INTO fantasymatches (match_id, team1_id, team2_id, team1_name, team2_name, match_time, contest_amount, slots, score, result, match_type)
                    VALUES (${match.match_id}, ${match.team1_id}, ${match.team2_id}, ${match.team1_name}, ${match.team2_name}, ${match.match_time}, ${match.contest_amount}, ${match.slots}, ${match.score}, ${match.result}, ${match.match_type})
                    ON CONFLICT (match_id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedMatches.length} matches`);

        return {
            createTable,
            matches: insertedMatches,
        };
    } catch (error) {
        console.error('Error seeding matches:', error);
        throw error;
    }
}

async function seedUserTeams(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "userteams" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS fantasyuserteams (
                team_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                user_id UUID NOT NULL,
                match_id UUID NOT NULL,
                team TEXT NOT NULL
            );
        `;

        console.log(`Created "userteams" table`);

        // Insert data into the "fantasyuserteams" table
        const insertedUsersTeams = await Promise.all(
            usersTeams.map(async (user) => {
                const userTeam = JSON.stringify(user.team);

                return client.sql`
                    INSERT INTO fantasyuserteams (team_id, user_id, match_id, team)
                    VALUES (${user.team_id}, ${user.user_id}, ${user.match_id}, ${userTeam})
                    ON CONFLICT (team_id) DO NOTHING;
                `;
            })
        )

        console.log(`Seeded ${insertedUsersTeams.length} users teams`);

        return {
            createTable,
            users: insertedUsersTeams,
        };
    } catch (error) {
        console.error('Error seeding users teams:', error);
        throw error;
    }
}

async function dropTables(client) {
    console.log("dropping 'users' tables");
    const dropUsers = await client.sql`
        DROP TABLE IF EXISTS fantasyusers;
    `;

    console.log("dropping 'transactions' tables");
    const dropTransactions = await client.sql`
        DROP TABLE IF EXISTS fantasytransactions;
    `;

    console.log("dropping 'earnings' tables");
    const dropEarnings = await client.sql`
        DROP TABLE IF EXISTS fantasyearnings;
    `;

    console.log("dropping 'teams' tables");
    const dropTeams = await client.sql`
        DROP TABLE IF EXISTS fantasyteams;
    `;

    console.log("dropping 'players' tables");
    const dropPlayers = await client.sql`
        DROP TABLE IF EXISTS fantasyplayers;
    `;

    console.log("dropping 'matches' tables");
    const dropMatches = await client.sql`
        DROP TABLE IF EXISTS fantasymatches;
    `;

    console.log("dropped all tables");

    return {
        dropUsers, dropTransactions, dropEarnings, dropTeams, dropTables, dropPlayers, dropMatches
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedTransactions(client);
    await seedEarnings(client);
    await seedTeams(client);
    await seedPlayers(client);
    await seedMatches(client);
    await seedUserTeams(client);

    console.log("Completed seeding process");

    // drop all tables
    // await dropTables(client);
}

main().catch(err => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
})