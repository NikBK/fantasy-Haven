import { fetchUpcomingMatches } from "@/app/lib/data";
import { upcomingMatchType } from "@/app/lib/typeDefinition";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

// const matches = [
//     {
//         teams: 'RCB vs CSK',
//         time: Date(),
//         slots: 25,
//         amount: 25
//     },
//     {
//         teams: 'MI vs KKR',
//         time: Date(),
//         slots: 120,
//         amount: 50
//     },
//     {
//         teams: 'LSG vs SRH',
//         time: Date(),
//         slots: 10,
//         amount: 15
//     },
//     {
//         teams: 'DC vs GL',
//         time: Date(),
//         slots: 25,
//         amount: 25
//     },
// ]


const UpcomingMatches = async () => {
    const matches: upcomingMatchType[] = await fetchUpcomingMatches();

    return (
        <>
            <div className={`${matches.length == 0 ? '' : 'hidden'} mt-4`}>No Matches found</div>
            {matches.map((match: upcomingMatchType, index: number) => (
                <Card match={match} key={index} />
            ))}
        </>
    )
}

const dateOption: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Kolkata',
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
}

// bg-[#e6e6fa]
const Card = ({ match }: { match: upcomingMatchType }) => {
    return (
        <div className="grid grid-cols-3 gap-2 place-items-center sm:gap-4 px-0 p-3 sm:p-4 mb-4 rounded-lg text-center text-base bg-indigo-500 w-full sm:max-w-xl">
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{match.team1_name} vs {match.team2_name}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{formatDateToLocal(match.time, dateOption)}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{formatCurrency(match.amount)}</div>
            <button className="px-2 py-2 text-xs sm:text-sm text-white bg-blue-700 rounded-full">Create Team</button>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white bg-blue-400 rounded-full">{match.slots} slots</div>
            <button className="px-2 py-2 text-xs sm:text-sm text-white bg-green-500 rounded-full">Join Game</button>
        </div>
    )
}

export default UpcomingMatches;
