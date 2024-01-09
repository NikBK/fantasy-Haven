import { fetchAllUsers } from "@/app/admin/api/data";
import { usersType } from "@/app/lib/typeDefinition";
import EditButtons from "@/app/admin/ui/users/EditButtons";

export default async function UsersTable({
    currentPage,
}: {
    currentPage: number;
}) {
    const users: usersType[] = await fetchAllUsers(currentPage);

    return (
        <div className="flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {users?.map((user) => (
                            <div
                                key={user.id}
                                className="mb-2 w-full rounded-md bg-white p-4 flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-lg font-medium">{user.name}</p>
                                    <p className="text-xs">{user.username}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-right mb-1">{user.email}</p>
                                    <p className="text-xs text-right flex items-center justify-end mt-1"><EditButtons user_id={user.id} /></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium">
                                    Name
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Username
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Email
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {users?.map((user) => (
                                <tr
                                    key={user.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-4 py-3">
                                        {user.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {user.username}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3 lowercase">
                                        {user.email}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3 flex items-center">
                                        <EditButtons user_id={user.id} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}