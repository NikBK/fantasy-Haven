// import Image from 'next/image';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

const earnings = [
    {
        id: 1,
        match: "RCB vs KKR",
        amount: 200,
        date: Date()
    },
    {
        id: 2,
        match: "RR vs CSK",
        amount: 50,
        date: Date()
    },
]

export default async function EarningsTable({
    currentPage,
}: {
    currentPage: number;
}) {
    //   const invoices = await fetchFilteredInvoices(currentPage);

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div className="md:hidden">
                        {earnings?.map((invoice) => (
                            <div
                                key={invoice.id}
                                className="mb-2 w-full rounded-md bg-white p-4 flex justify-between"
                            >
                                <div>
                                    <p className="text-lg font-medium">{invoice.match}</p>
                                    <p className="text-xs">{formatDateToLocal(invoice.date)}</p>
                                </div>
                                <p className="text-xl font-medium">
                                    {formatCurrency(invoice.amount)}
                                </p>
                            </div>
                        ))}
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
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {earnings?.map((invoice) => (
                                <tr
                                    key={invoice.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap px-4 py-3">
                                        {formatDateToLocal(invoice.date)}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {invoice.match}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {formatCurrency(invoice.amount)}
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