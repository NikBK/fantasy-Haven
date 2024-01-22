export type upcomingMatchType = {
    id: string;
    team1_name: string;
    team2_name: string;
    time: string;
    amount: number;
    slots: number;
}

export type pastMatchType = {
    id: string;
    teams: string;
    time: string;
    score: string;
    amount: number;
    result: string;
}

export type liveMatchType = {
    id: string;
    team1_name: string;
    team2_name: string;
    time: string;
    score: string;
    amount: number;
}

export type currentBalanceType = {
    current_balance: number;
}

export type transactionHistoryType = {
    id: string;
    type: string;
    amount: number;
    date: string;
}

export type earningsHistoryType = {
    id: string;
    teams: string;
    date: string;
    amount: number;
    result: string;
}

export type earningsType = {
    total_earnings: number;
    total_matches: number;
    total_matches_won: number;
}

export type userType = {
    id: string;
    name: string;
    email: string;
    password: string;
    username: string;
    role: string;
}

export type createUserType = {
    name: string;
    email: string;
    hashedPassword: string;
    userName: string;
}

export type playersDetailsType = {
    player_id: string;
    player_name: string;
    role: 'wicket keeper' | 'batsman' | 'all-rounder' | 'bowler';
    team_name: string;
}

export type captainType = {
    player_id: string;
    player_name: string;
}

export type userTeamType = {
    team_id: string;
    team: string;
}

export type teamPlayerType = {
    player_id: string;
    player_name: string;
    role: "wicket keeper" | 'batsman' | 'all-rounder' | 'bowler';
    team_name: string;
}

export type dashboardDataType = {
    total_users: number;
    total_transactions: number;
}

export type usersType = {
    id: string;
    name: string;
    email: string;
    username: string;
}

export type TeamType = {
    id: string;
    name: string;
    players_list: JSON;
}

export type CreateMatchFormType = {
    team1_id: string;
    team2_id: string;
    team1: string;
    team2: string;
    time: string;
    amount: number;
    slots: number;
    winningPrize: number;
}