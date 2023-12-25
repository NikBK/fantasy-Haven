import { fetchEarnings } from "@/app/lib/data";
import { formatCurrency } from "@/app/lib/utils";
import { lusitana } from "@/app/ui/fonts";
import {
    UserGroupIcon,
    CurrencyRupeeIcon,
    HandThumbUpIcon
} from '@heroicons/react/24/outline';

const iconMap = {
    totalEarnings: CurrencyRupeeIcon,
    totalMatches: UserGroupIcon,
    totalVictory: HandThumbUpIcon,
};

// const totalEarnings = 300, totalMatches = 200, totalVictory = 100;

export default async function CardWrapper() {
    const { total_earnings, total_matches, total_matches_won } = await fetchEarnings();

    return (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <Card title="Total Earnings" value={total_earnings} type="totalEarnings" />
            <Card title="Total Matches" value={total_matches} type="totalMatches" />
            <Card title="Matches Won" value={total_matches_won} type="totalVictory" />
        </div>
    );
}

export function Card({ title, value, type }: {
    title: string;
    value: number;
    type: 'totalEarnings' | 'totalMatches' | 'totalVictory';
}) {
    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-4 sm:py-8 text-center text-2xl`}>
                {type === 'totalEarnings' ? formatCurrency(value) : value}
            </p>
        </div>
    );
}