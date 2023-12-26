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