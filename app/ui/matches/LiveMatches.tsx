import { fetchLiveMatches } from "@/app/lib/data";
import { liveMatchType } from "@/app/lib/typeDefinition";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

// const matches = [
//     {
//         teams: 'RCB vs CSK',
//         time: Date(),
//         score: "4/0 (1.3)",
//         amount: 25
//     },
//     {
//         teams: 'MI vs KKR',
//         time: Date(),
//         score: "120/2 (10.2/20) | 152",
//         amount: 50
//     },
//     {
//         teams: 'LSG vs SRH',
//         time: Date(),
//         score: "102/6 (18.5/20) | 132",
//         amount: 15
//     },
//     {
//         teams: 'DC vs GL',
//         time: Date(),
//         score: "165/7 (19/20) | 178",
//         amount: 25
//     },
// ]


const LiveMatches = async () => {
    const matches: liveMatchType[] = await fetchLiveMatches();

    return (
        <>
            {matches.map((match: liveMatchType, index: number) => (
                <Card match={match} key={index} />
            ))}
        </>
    )
}

const dateOption: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
}
// bg-[#e6e6fa]
const Card = ({ match }: { match: liveMatchType }) => {
    return (
        <div className="grid grid-cols-3 gap-2 place-items-center sm:gap-4 px-0 p-3 sm:p-4 mb-4 rounded-lg text-center text-base bg-indigo-500 w-full sm:max-w-xl">
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{match.team1_name} vs {match.team2_name}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{formatDateToLocal(match.time, dateOption)}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{formatCurrency(match.amount)}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm col-span-3 text-white bg-blue-400 rounded-full">{match.score}</div>
        </div>
    )
}

export default LiveMatches;
