import { formatCurrency } from "@/app/lib/utils";
import { lusitana } from "@/app/ui/fonts";
import { ArrowDownIcon, ArrowUpIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

const iconMap = {
    currentBalance: CurrencyRupeeIcon,
};

const currentBalance = 300;

export default async function CardWrapper() {
    // const { currentBalance, totalMatches } = await fetchCardData();

    return (
        <div className="grid gap-8 sm:grid-cols-2">
            <Card title="Current Balance" value={currentBalance} type="currentBalance" />
            <TransactionCard />
        </div>
    );
}

export function Card({ title, value, type }: {
    title: string;
    value: number;
    type: 'currentBalance';
}) {
    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-4 sm:py-8 text-center text-2xl`}>
                {type === 'currentBalance' ? formatCurrency(value) : value}
            </p>
        </div>
    );
}

export function TransactionCard() {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm flex flex-col justify-center items-center">
            <button className="flex p-2 my-2 rounded-xl bg-green-500 text-white">
                <ArrowUpIcon className="h-5 w-5" />
                <h3 className="ml-2 text-sm font-medium">Add Money</h3>
            </button>
            <button className="flex p-2 my-2 rounded-xl bg-blue-500 text-white">
                <ArrowDownIcon className="h-5 w-5" />
                <h3 className="ml-2 text-sm font-medium">Withdraw Money</h3>
            </button>
        </div>
    );
}