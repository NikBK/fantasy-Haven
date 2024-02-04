'use client';

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createTeam, getAllTeamNames, getAllUncappedPlayers } from "@/app/admin/api/actions";
import { CreateTeamFormType, PlayerType, TeamNameType, UncappedPlayerType } from "@/app/lib/typeDefinition";
import { XMarkIcon } from "@heroicons/react/24/outline";

const CreateTeamForm = () => {
    const [formData, setFormData] = useState<CreateTeamFormType>({
        name: '',
        selectedPlayers: [],
        currentInput: '',
    });
    const [playersList, setPlayersList] = useState<UncappedPlayerType[]>([]);
    const [allTeams, setAllTeams] = useState<TeamNameType[]>([]);
    const router = useRouter();

    useEffect(() => {
        async function getPlayers() {
            const allPlayers = await getAllUncappedPlayers();
            setPlayersList([...allPlayers]);
        }

        async function getTeamNames() {
            const teamNames = await getAllTeamNames();
            setAllTeams([...teamNames]);
        }

        getPlayers();
        getTeamNames();
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const teamExists = allTeams.some(team => team.name.toLowerCase() == formData.name.toLowerCase());
        if (teamExists) {
            alert('Team: ' + formData.name + ' already exists, please give a different name');
            return;
        }

        if (formData.selectedPlayers.length < 11) {
            alert('Please select atleast 11 players');
            return;
        }

        createTeam(formData);
        router.push('/admin/manage');
        router.refresh();
    }

    const handleAddPlayer = () => {
        if (formData.selectedPlayers.length < 15) {
            let value = formData.currentInput.trim();
            let selectedPlayer = playersList.find(player => player.name.toLowerCase() === value.toLowerCase());
            if (selectedPlayer && selectedPlayer.name) {
                setFormData({
                    ...formData,
                    selectedPlayers: [...formData.selectedPlayers, { 'player_id': selectedPlayer.id, 'player_name': selectedPlayer.name, 'role': selectedPlayer.role }],
                    currentInput: '',
                });
                setPlayersList(() => playersList.filter(player => player.name != selectedPlayer?.name));
            }
            else {
                alert("Please select player from dropdown");
            }
        }
        else {
            alert("You have already selected 15 players");
        }
    };

    const handleRemovePlayer = (player: PlayerType) => {
        const updatedPlayers = formData.selectedPlayers.filter((selectedPlayer) => selectedPlayer.player_name !== player.player_name);
        setFormData({
            ...formData,
            selectedPlayers: updatedPlayers,
        });
        setPlayersList([...playersList, { "id": player.player_id, "name": player.player_name, "role": player.role }])
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Team Name</label>
                    <input
                        type="text"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Eg: RCB"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Players List</label>
                    <div className="flex">
                        <input
                            type="text"
                            list="players"
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Type and select players"
                            value={formData.currentInput}
                            onChange={(e) => setFormData({ ...formData, currentInput: e.target.value })}
                        />
                        <button
                            type="button"
                            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                            onClick={handleAddPlayer}
                        >
                            Add
                        </button>
                    </div>
                    <datalist id="players">
                        {playersList.map((player) => (
                            <option key={player.id} value={player.name} />
                        ))}
                    </datalist>
                    {formData.selectedPlayers.length > 0 && <div className="mt-4 mb-4 block text-sm font-medium text-gray-700">Selected players ({formData.selectedPlayers.length})</div>}
                    <div className="mt-2 flex items-center flex-wrap">
                        {formData.selectedPlayers.map((player, index) => (
                            <span key={index} className="ml-2">
                                <button
                                    type="button"
                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                    onClick={() => handleRemovePlayer(player)}
                                >
                                    <span className="mr-2 text-blue-500">
                                        {player.player_name}
                                    </span>
                                    <XMarkIcon width={20} height={20} className="inline-block" />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Submit
                    </button>
                </div>
            </form>

        </div>
    );
}

export default CreateTeamForm;
