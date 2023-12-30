import { Metadata } from "next";
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/wallet/Cards";
import Pagination from "@/app/ui/earnings/Pagination";
import TransactionsTable from "@/app/ui/wallet/TransactionsTable";
import { TransactionsCardsSkeleton, TransactionsTableSkeleton } from "@/app/ui/skeletons";
import { fetchTransactionsPages } from "../lib/data";

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
    const total_pages = await fetchTransactionsPages();

    return (
        <>
            <Suspense fallback={<TransactionsCardsSkeleton />}>
                <CardWrapper />
            </Suspense>
            <div className="bg-white rounded-md py-2 my-4">
                <div className="flex w-full items-center justify-between px-5 mt-4">
                    <h1 className={`${lusitana.className} text-2xl`}>Transactions</h1>
                </div>

                {total_pages > 0 ?
                    <>
                        <Suspense fallback={<TransactionsTableSkeleton />}>
                            <TransactionsTable currentPage={currentPage} />
                        </Suspense>
                    </> :
                    <>
                        <div className="mt-5 text-center">No transactions found</div>
                    </>
                }

                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={total_pages} />
                </div>
            </div>
        </>
    )
}

