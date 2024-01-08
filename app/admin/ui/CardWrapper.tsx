import { formatCurrency } from "@/app/lib/utils";
import { lusitana } from "@/app/ui/fonts";
import {
    UserGroupIcon,
    CurrencyRupeeIcon,
    ArrowsRightLeftIcon,

} from '@heroicons/react/24/outline';
import { fetchDashboardData } from "@/app/admin/api/data";

const iconMap = {
    totalUsers: UserGroupIcon,
    totalIncome: CurrencyRupeeIcon,
    totalTransactions: ArrowsRightLeftIcon,
};

const total_income = 300;

export default async function CardWrapper() {
    const { total_users, total_transactions } = await fetchDashboardData();

    return (
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            <Card title="Total Users" value={total_users} type="totalUsers" />
            <Card title="Total Income" value={total_income} type="totalIncome" />
            <Card title="Total Transactions" value={total_transactions} type="totalTransactions" />
        </div>
    );
}

export function Card({ title, value, type }: {
    title: string;
    value: number;
    type: 'totalUsers' | 'totalIncome' | 'totalTransactions';
}) {
    const Icon = iconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
            <p className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-4 sm:py-8 text-center text-2xl`}>
                {type === 'totalIncome' ? formatCurrency(value) : value}
            </p>
        </div>
    );
}