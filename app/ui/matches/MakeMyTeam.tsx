'use client';

import { lusitana } from "@/app/ui/fonts";
import CloseButton from "@/app/ui/CloseButton";
import MyTeamTable from "@/app/ui/matches/MyTeamTable";

const MakeMyTeam = ({ match_id }: { match_id: string }) => {
    return (
        <div className="bg-white rounded-md py-2">
            <div className="flex w-full items-center justify-between px-5 mt-4">
                <h1 className={`${lusitana.className} text-2xl`}>Create Team</h1>
                <CloseButton redirectTo={'/matches/upcoming'} />
            </div>

            <MyTeamTable match_id={match_id} />

        </div>
    )
}

export default MakeMyTeam;
