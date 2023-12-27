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
}