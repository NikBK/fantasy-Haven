import { fetchUserTeam } from '@/app/lib/data';
import { userTeamType, teamPlayerType } from '@/app/lib/typeDefinition';
import CloseButton from '@/app/ui/CloseButton';

const IconMap = [
    '/assets/icons/cricket-gloves.png',
    '/assets/icons/cricket-bat.png',
    '/assets/icons/cricket-bat-ball.png',
    '/assets/icons/cricket-ball.png'
]


const ViewTeam = async ({ params }: { params: { id: string } }) => {
    const userTeam: userTeamType = await fetchUserTeam(params.id);
    const team = JSON.parse(userTeam.team);

    const wicketKeepers = team.filter((player: teamPlayerType) => player.role === 'wicket keeper');
    const batsmans = team.filter((player: teamPlayerType) => player.role === 'batsman');
    const allRounders = team.filter((player: teamPlayerType) => player.role === 'all-rounder');
    const bowlers = team.filter((player: teamPlayerType) => player.role === 'bowler');

    const myTeam = [wicketKeepers, batsmans, allRounders, bowlers];

    return (
        <>
            <h1 className="text-2xl font-bold mb-2">My Team</h1>
            <CloseButton redirectTo={'/matches/upcoming'} />

            <div className="bg-green-500 min-h-screen flex flex-col items-center justify-center rounded-[30%] h-[80vh] mb-8">
                <div className="container mx-auto p-4 bg-green-800 text-white rounded-[30%] h-full flex flex-col justify-around w-[90vw] md:w-[60vw] lg:w-[600px]">
                    {myTeam.map((roleCategory, index) => {
                        return (
                            <div className='flex flex-col items-center' key={index}>
                                <img src={IconMap[index]} width={40} height={40} />
                                <ul className='flex flex-row flex-wrap justify-around'>
                                    {roleCategory.map((player: teamPlayerType) => {
                                        return (
                                            <li key={player.player_id} title={player.player_name} className='my-4 mx-2 border-b border-slate-100'>
                                                {player.player_name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ViewTeam
