import { Metadata } from "next";
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import { UsersTableSkeleton } from "@/app/ui/skeletons";
import UsersTable from "@/app/admin/ui/users/UsersTable";
import AdminsTable from "@/app/admin/ui/users/AdminsTable";

export const metadata: Metadata = {
    title: "Users"
}

export default async function UserPage({
    searchParams,
}: {
    searchParams?: {
        page?: string;
    };
}) {
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <>
            <div>
                <div className="flex w-full items-center justify-between px-5 mt-4">
                    <h1 className={`${lusitana.className} text-2xl`}>Admins</h1>
                </div>
                <Suspense fallback={<UsersTableSkeleton />}>
                    <AdminsTable />
                </Suspense>
            </div>

            <hr className="my-6 border-b-2 border-t-0" />

            <div>
                <div className="flex w-full items-center justify-between px-5 mt-4">
                    <h1 className={`${lusitana.className} text-2xl`}>Users</h1>
                </div>
                <Suspense fallback={<UsersTableSkeleton />}>
                    <UsersTable currentPage={currentPage} />
                </Suspense>
            </div>
        </>
    )
}
