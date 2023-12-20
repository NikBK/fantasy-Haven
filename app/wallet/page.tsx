import { Metadata } from "next";
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/wallet/Cards";
import Pagination from "@/app/ui/earnings/Pagination";
import TransactionsTable from "@/app/ui/wallet/TransactionsTable";
import { CardsSkeleton, EarningsTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
    title: "Wallet"
}


export default async function Page({
    searchParams,
}: {
    searchParams?: {
        page?: string;
    };
}) {
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = 10;

    return (
        <>
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>
            <div className="bg-white rounded-md py-2 my-4">
                <div className="flex w-full items-center justify-between px-5 mt-4">
                    <h1 className={`${lusitana.className} text-2xl`}>Transactions</h1>
                </div>
                <Suspense fallback={<EarningsTableSkeleton />}>
                    <TransactionsTable currentPage={currentPage} />
                </Suspense>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </>
    )
}

