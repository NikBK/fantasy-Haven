'use client';

import { getUserByID, updateUserRole } from "@/app/admin/api/actions";
import { userType } from "@/app/lib/typeDefinition";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const EditUser = ({ params }: { params: { id: string } }) => {

    const [user, setUser] = useState<userType>({ id: '', name: '', email: '', username: '', role: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRoleChange = (newRole: string) => {
        setUser((prevUser: userType) => ({ ...prevUser, role: newRole }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await updateUserRole(user.id, user.role);

        router.push('/admin/users');
        router.refresh();

        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        async function fetchUser() {
            const user: userType = await getUserByID(params.id);
            setUser(user);
        }
        fetchUser();
        setLoading(false);
    }, [])

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Edit User Details</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={user.name}
                        disabled
                        className="border p-2 w-full cursor-not-allowed text-gray-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                        UserName
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        disabled
                        className="border p-2 w-full cursor-not-allowed text-gray-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        disabled
                        className="border p-2 w-full cursor-not-allowed text-gray-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                        Role
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={user.role}
                        onChange={(e) => handleRoleChange(e.target.value)}
                        className="border p-2 w-full"
                        required
                    >
                        <option disabled value=""></option>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                        {loading ? 'Updating...' : 'Update User'}
                    </button>
                    <button onClick={router.back} type="button" className="bg-orange-500 text-white p-2 rounded">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditUser;
