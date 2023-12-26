import { fetchPastMatches } from "@/app/lib/data";
import { pastMatchType } from "@/app/lib/typeDefinition";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

// const matches = [
//     {
//         teams: 'RCB vs CSK',
//         time: Date(),
//         score: "CSK:121 | RCB:135",
//         amount: 25,
//         result: 'won'
//     },
//     {
//         teams: 'MI vs KKR',
//         time: Date(),
//         score: "KKR:155 | MI:152",
//         amount: 50,
//         result: 'lost'
//     },
//     {
//         teams: 'LSG vs SRH',
//         time: Date(),
//         score: "LSG:129 | SRH:132",
//         amount: 15,
//         result: 'won'
//     },
//     {
//         teams: 'DC vs GT',
//         time: Date(),
//         score: "DC:180 | GT:178",
//         amount: 25,
//         result: 'lost'
//     },
// ]


const PastMatches = async () => {
    const matches: pastMatchType[] = await fetchPastMatches();

    return (
        <>
            {matches.map((match: pastMatchType, index: number) => (
                <Card match={match} key={index} />
            ))}
        </>
    )
}

const dateOption: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
}
// bg-[#e6e6fa]
const Card = ({ match }: { match: pastMatchType }) => {
    return (
        <div className="grid grid-cols-3 gap-2 place-items-center sm:gap-4 px-0 p-3 sm:p-4 mb-4 rounded-lg text-center text-base bg-indigo-500 w-full sm:max-w-xl">
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{match.teams}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{formatDateToLocal(match.time, dateOption)}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white">{formatCurrency(match.amount)}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white bg-blue-400 rounded-full col-span-2">{match.score}</div>
            <div className="px-4 py-2 max-xs:px-2 max-xs:text-sm text-white bg-blue-400 rounded-full">{match.result}</div>
        </div>
    )
}

export default PastMatches;
