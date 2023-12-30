// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                <div className="h-5 w-5 rounded-md bg-gray-200" />
                <div className="ml-2 h-6 w-24 rounded-md bg-gray-200 text-sm font-medium" />
            </div>
            <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                <div className="h-7 w-20 rounded-md bg-gray-200" />
            </div>
        </div>
    );
}

export function CardsSkeleton() {
    return (
        <div className="animate-pulse grid gap-4 sm:gap-6 sm:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}

export function InvoiceSkeleton() {
    return (
        <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
            <div className="flex items-center">
                <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
                <div className="min-w-0">
                    <div className="h-5 w-40 rounded-md bg-gray-200" />
                    <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
                </div>
            </div>
            <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
    );
}

export function InvoicesMobileSkeleton() {
    return (
        <div className="mb-2 w-full rounded-md bg-white p-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-8">
                <div className="flex items-center">
                    <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                </div>
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </div>
            <div className="flex w-full items-center justify-between pt-4">
                <div>
                    <div className="h-6 w-16 rounded bg-gray-100"></div>
                    <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
                </div>
                <div className="flex justify-end gap-2">
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                    <div className="h-10 w-10 rounded bg-gray-100"></div>
                </div>
            </div>
        </div>
    );
}

export function TableRowSkeleton() {
    return (
        <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            {/* Customer Name and Image */}
            <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100"></div>
                    <div className="h-6 w-24 rounded bg-gray-100"></div>
                </div>
            </td>
            {/* Email */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-32 rounded bg-gray-100"></div>
            </td>
            {/* Amount */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Date */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Status */}
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-100"></div>
            </td>
            {/* Actions */}
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                    <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
                </div>
            </td>
        </tr>
    );
}



// TRANSACTIONS RELATED SKELETONS

export function TransactionButtonsCardSkeleton() {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-center items-center">
            <div className="h-8 w-24 my-2 rounded-xl bg-gray-200" />
            <div className="h-8 w-32 my-2 rounded-xl bg-gray-200" />
        </div>
    );
}

export function TransactionsCardsSkeleton() {
    return (
        <div className="animate-pulse grid gap-8 sm:grid-cols-2">
            <CardSkeleton />
            <TransactionButtonsCardSkeleton />
        </div>
    );
}

export function TransactionsMobileSkeleton() {
    return (
        <div className="mb-2 w-full rounded-md bg-white p-4 flex justify-between animate-pulse">
            <div>
                <div className="h-8 w-24 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-32 bg-gray-200"></div>
            </div>
            <div>
                <div className="h-8 w-20 bg-gray-200 rounded mb-1"></div>
            </div>
        </div >
    )
}

export function TransactionsTableRowSkeleton() {
    return (
        <tr className="animate-pulse w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap px-4 py-3">
                <div className="h-6 w-36 rounded bg-gray-200"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-14 rounded bg-gray-200"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-200"></div>
            </td>
        </tr>
    )
}

export function TransactionsTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        <TransactionsMobileSkeleton />
                        <TransactionsMobileSkeleton />
                        <TransactionsMobileSkeleton />
                        <TransactionsMobileSkeleton />
                        <TransactionsMobileSkeleton />
                        <TransactionsMobileSkeleton />
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Type
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <TransactionsTableRowSkeleton />
                            <TransactionsTableRowSkeleton />
                            <TransactionsTableRowSkeleton />
                            <TransactionsTableRowSkeleton />
                            <TransactionsTableRowSkeleton />
                            <TransactionsTableRowSkeleton />
                            <TransactionsTableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}



// EARNIGNS RELATED SKELETONS

export function EarningsCardsSkeleton() {
    return (
        <div className="animate-pulse grid gap-4 sm:gap-6 sm:grid-cols-3">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}

export function EarningsTableRowSkeleton() {
    return (
        <tr className="animate-pulse w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
            <td className="whitespace-nowrap px-4 py-3">
                <div className="h-6 w-36 rounded bg-gray-200"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-200"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3 lowercase">
                <div className="h-6 w-14 rounded bg-gray-200"></div>
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                <div className="h-6 w-16 rounded bg-gray-200"></div>
            </td>
        </tr>
    )
}

export function EarningsMobileSkeleton() {
    return (
        <div className="mb-2 w-full rounded-md bg-white p-4 flex justify-between animate-pulse">
            <div>
                <div className="h-8 w-24 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-32 bg-gray-200"></div>
            </div>
            <div>
                <div className="h-8 w-20 bg-gray-200 rounded mb-1"></div>
                <div className="h-4 w-8 bg-gray-200 float-right"></div>
            </div>
        </div >
    )
}

export function EarningsTableSkeleton() {
    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        <EarningsMobileSkeleton />
                        <EarningsMobileSkeleton />
                        <EarningsMobileSkeleton />
                        <EarningsMobileSkeleton />
                        <EarningsMobileSkeleton />
                        <EarningsMobileSkeleton />
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Match
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Result
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <EarningsTableRowSkeleton />
                            <EarningsTableRowSkeleton />
                            <EarningsTableRowSkeleton />
                            <EarningsTableRowSkeleton />
                            <EarningsTableRowSkeleton />
                            <EarningsTableRowSkeleton />
                            <EarningsTableRowSkeleton />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}