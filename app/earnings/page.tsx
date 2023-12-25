import { Metadata } from "next";
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/earnings/Cards";
import Pagination from "@/app/ui/earnings/Pagination";
import EarningsTable from "@/app/ui/earnings/EarningsTable";
import { CardsSkeleton, EarningsTableSkeleton } from "@/app/ui/skeletons";
import { fetchEarningsPages } from "@/app/lib/data";

export const metadata: Metadata = {
    title: "Earnings"
}


export default async function Page({
    searchParams,
}: {
    searchParams?: {
        page?: string;
    };
}) {
    const currentPage = Number(searchParams?.page) || 1;
    const total_pages = await fetchEarningsPages();

    return (
        <>
            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>
            <div className="bg-white rounded-md py-2 my-4">
                <div className="flex w-full items-center justify-between px-5 mt-4">
                    <h1 className={`${lusitana.className} text-2xl`}>Past Earnings</h1>
                </div>
                <Suspense fallback={<EarningsTableSkeleton />}>
                    <EarningsTable currentPage={currentPage} />
                </Suspense>
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={total_pages} />
                </div>
            </div>
        </>
    )
}

