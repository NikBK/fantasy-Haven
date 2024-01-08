import { Metadata } from "next";
import { Suspense } from "react";
import { EarningsCardsSkeleton } from "@/app/ui/skeletons";
import CardWrapper from "@/app/admin/ui/CardWrapper";

export const metadata: Metadata = {
    title: "Admin Dashboard"
}

const AdminPage = () => {
    return (
        <div>
            <Suspense fallback={<EarningsCardsSkeleton />}>
                <CardWrapper />
            </Suspense>
        </div>
    )
}

export default AdminPage;