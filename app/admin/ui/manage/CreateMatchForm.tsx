'use client';

import { createMatch, getAllTeams } from "@/app/admin/api/actions";
import { CreateMatchFormType, TeamType } from "@/app/lib/typeDefinition";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const CreateMatchForm = () => {
    const [teams, setTeams] = useState<TeamType[]>([]);
    const [formData, setFormData] = useState<CreateMatchFormType>({ team1_id: '', team2_id: '', team1: '', team2: '', time: '', amount: 0, slots: 2, winningPrize: 0 });
    const router = useRouter();

    useEffect(() => {
        async function getTeamNames() {
            const allTeams = await getAllTeams();
            setTeams(allTeams);
        }

        getTeamNames();
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (formData.team1 == formData.team2) {
            alert("Please provide different team names")
            return;
        }

        createMatch(formData);
        router.push('/admin/manage');
        // router.refresh();
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Team 1</label>
                    <select
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.team1}
                        onChange={e => setFormData({ ...formData, team1: e.target.value, team1_id: e.target.id })}
                        required
                    >
                        <option value="" disabled hidden>
                            Select Team 1
                        </option>
                        {teams.map((team) => (
                            <option key={team.name} value={team.name} id={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Team 2</label>
                    <select
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.team2}
                        onChange={e => setFormData({ ...formData, team2: e.target.value, team2_id: e.target.id })}
                        required
                    >
                        <option value="" disabled hidden>
                            Select Team 2
                        </option>
                        {teams.map((team) => (
                            <option key={team.name} value={team.name} id={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Time</label>
                    <input
                        type="datetime-local"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter Amount"
                        min={0}
                        value={formData.amount}
                        onChange={e => setFormData({ ...formData, amount: parseInt(e.target.value) })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Slots</label>
                    <input
                        type="number"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter Slots (min 2)"
                        min={2}
                        value={formData.slots}
                        onChange={e => setFormData({ ...formData, slots: parseInt(e.target.value) })}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Winning Prize</label>
                    <input
                        type="number"
                        className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter Winning Amount"
                        min={0}
                        max={Math.floor(formData.amount * formData.slots * 0.9)}
                        value={Math.floor(formData.amount * formData.slots * 0.9)}
                        onChange={e => setFormData({ ...formData, winningPrize: parseInt(e.target.value) })}
                        required
                    />
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
};

export default CreateMatchForm;