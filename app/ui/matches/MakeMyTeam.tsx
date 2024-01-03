'use client';

import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { captainType, playersDetailsType } from "@/app/lib/typeDefinition";
import { createUserteam, fetchPlayersDetails } from "@/app/lib/actions";
import { lusitana } from "@/app/ui/fonts";
import { useRouter } from "next/navigation";

const MakeMyTeam = ({ match_id }: { match_id: string }) => {
    const router = useRouter();

    const [players, setPlayers] = useState<playersDetailsType[]>([]);
    const [selectedPlayers, setSelectedPlayers] = useState<playersDetailsType[]>([]);

    const [captain, setCaptain] = useState<captainType>({ player_id: '', player_name: '' });
    const [viceCaptain, setViceCaptain] = useState<captainType>({ player_id: '', player_name: '' });

    useEffect(() => {
        fetchPlayersDetails(match_id)
            .then(playersDetail => setPlayers([...playersDetail]))
    }, [])

    const handleCaptainSelect = (player_id: string, player_name: string) => {
        setCaptain({ player_id, player_name });
        if (viceCaptain.player_id == player_id) {
            setViceCaptain({ player_id: '', player_name: '' });
        }
    };

    const handleViceCaptainSelect = (player_id: string, player_name: string) => {
        setViceCaptain({ player_id, player_name });
        if (captain.player_id == player_id) {
            setCaptain({ player_id: '', player_name: '' });
        }
    };

    const handlePlayerSelect = (player: playersDetailsType) => {
        if (selectedPlayers.some(p => p.player_id == player.player_id)) {
            handlePlayerRemove(player);
            return;
        }

        if (selectedPlayers.length == 11) return;

        const playerRoleCount: { [key: string]: number } = selectedPlayers.reduce(
            (count, selectedPlayer) => {
                count[selectedPlayer.role]++;
                return count;
            },
            { 'wicket keeper': 0, 'batsman': 0, 'all-rounder': 0, 'bowler': 0 }
        );

        if (
            (player.role === 'wicket keeper' && playerRoleCount['wicket keeper'] >= 2) ||
            (player.role === 'batsman' && playerRoleCount['batsman'] >= 5) ||
            (player.role === 'all-rounder' && playerRoleCount['all-rounder'] >= 4) ||
            (player.role === 'bowler' && playerRoleCount['bowler'] >= 5)
        ) {
            alert(`Cannot select more ${player.role}s.`)
            return;
        }

        const newPlayersList = [...selectedPlayers, player];

        if (newPlayersList.length >= 10) {
            for (let role in playerRoleCount) {
                if (playerRoleCount[role] == 0) {
                    if (role == player.role) {
                        setSelectedPlayers([...selectedPlayers, player]);
                        return;
                    }
                    else {
                        alert(`Please select atleast one ${role}.`);
                        return;
                    }
                }
            }
        }

        setSelectedPlayers([...selectedPlayers, player]);
    };

    const handlePlayerRemove = (player: playersDetailsType) => {
        const updatedPlayers = selectedPlayers.filter((p) => p.player_id !== player.player_id);
        setSelectedPlayers(updatedPlayers);

        if (viceCaptain.player_id == player.player_id) {
            setViceCaptain({ player_id: '', player_name: '' });
        }
        else if (captain.player_id == player.player_id) {
            setCaptain({ player_id: '', player_name: '' });
        }
    };

    const handleSaveTeam = async () => {
        // console.log(selectedPlayers);
        // console.log("json", JSON.stringify(selectedPlayers));
        // console.log("parsed", JSON.parse(JSON.stringify(selectedPlayers)));

        await createUserteam(match_id, selectedPlayers);
        router.push('/matches/upcoming');
    }

    // Function to render table rows based on player type
    const renderTableRows = (playerType: string) => {
        const filteredPlayers = players.filter((player) => player.role === playerType);

        return filteredPlayers.map((player) => {
            const isPlayerSelected = selectedPlayers.some(p => p.player_id == player.player_id);

            return (
                <tr
                    key={player.player_id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                    <td className="whitespace-nowrap py-3 px-4 lg:px-6">{player.player_name}</td>
                    <td className="whitespace-nowrap py-3 px-3 lg:px-5 capitalize">{player.role}</td>
                    <td className="whitespace-nowrap py-3 px-3 lg:px-5 capitalize">{player.team_name}</td>
                    <td className="whitespace-nowrap py-3 px-3 lg:px-5 flex flex-row items-center justify-center">
                        <span
                            className={`${captain.player_id == player.player_id ? 'bg-red-200' : ''} ${isPlayerSelected ? 'cursor-pointer' : 'pointer-events-none'} flex items-center justify-center border border-red-400 text-xs rounded-full h-7 w-7`}
                            onClick={() => handleCaptainSelect(player.player_id, player.player_name)}
                            aria-disabled={isPlayerSelected ? false : true}
                        >
                            C
                        </span>
                        <span className="px-1">/</span>
                        <span
                            className={`${viceCaptain.player_id == player.player_id ? 'bg-red-200' : ''} ${isPlayerSelected ? 'cursor-pointer' : 'pointer-events-none'} flex items-center justify-center border border-red-400 text-xs rounded-full h-7 w-7`}
                            onClick={() => handleViceCaptainSelect(player.player_id, player.player_name)}
                            aria-disabled={isPlayerSelected ? false : true}
                        >
                            VC
                        </span>
                    </td>
                    <td className="whitespace-nowrap py-3 px-3 lg:px-5 text-center">
                        <button className="w-8 h-8 rounded-full">
                            <CheckCircleIcon
                                className={`${isPlayerSelected ? 'text-green-600 bg-green-100' : 'text-green-300'} w-full h-full rounded-full cursor-pointer`}
                                onClick={() => handlePlayerSelect(player)}
                            />
                        </button>
                    </td>
                </tr>
            )
        });
    };


    return (
        <div className="bg-white rounded-md py-2">
            <div className="flex w-full items-center justify-between px-5 mt-4">
                <h1 className={`${lusitana.className} text-2xl`}>Create Team</h1>
            </div>

            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <table className="min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="py-5 px-4 lg:px-6 font-medium">
                                        Player Name
                                    </th>
                                    <th scope="col" className="py-5 px-3 lg:px-5 font-medium">
                                        Role
                                    </th>
                                    <th scope="col" className="py-5 px-3 lg:px-5 font-medium">
                                        Team
                                    </th>
                                    <th scope="col" className="py-5 px-3 lg:px-5 font-medium">
                                        Power
                                    </th>
                                    <th scope="col" className="py-5 px-3 lg:px-5 font-medium">
                                        Add/Remove
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {/* Render rows for each player type */}
                                {renderTableRows('wicket keeper')}
                                {renderTableRows('batsman')}
                                {renderTableRows('all-rounder')}
                                {renderTableRows('bowler')}
                            </tbody>
                        </table>

                        <div className="mt-6 mb-8 flex justify-between">
                            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSaveTeam}>Save Team</button>
                            <button className="bg-purple-500 text-white px-4 py-2 rounded">Join Contest</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeMyTeam;
