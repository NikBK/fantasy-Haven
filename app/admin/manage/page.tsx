import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { ArrowPathIcon, BookOpenIcon, CalendarDaysIcon, UserGroupIcon, UserIcon, WrenchIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const options = [
    {
        label: 'Create Match',
        href: '/admin/manage/create-match',
        icon: CalendarDaysIcon
    },
    {
        label: 'Update Match',
        href: '/admin/manage/update-match',
        icon: ArrowPathIcon
    },
    {
        label: 'Create Team',
        href: '/admin/manage/create-team',
        icon: UserGroupIcon
    },
    {
        label: 'Update Team',
        href: '/admin/manage/update-team',
        icon: WrenchScrewdriverIcon
    },
    {
        label: 'Create Player',
        href: '/admin/manage/create-player',
        icon: UserIcon
    },
    {
        label: 'Update Player',
        href: '/admin/manage/update-player',
        icon: WrenchIcon
    },
    {
        label: 'Update Score',
        href: '/admin/manage/update-score',
        icon: BookOpenIcon
    },
];

const Manage = () => {
    return (
        <div className="bg-white rounded-md p-4 mb-4">
            <div className="flex w-full items-center justify-between mb-4">
                <h1 className={`${lusitana.className} text-2xl`}>Manage</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
                {options.map((option) => {
                    const ManageIcon = option.icon;

                    return (
                        <Link
                            key={option.label}
                            href={option.href}
                            className={`cursor-pointer p-4 bg-white rounded-md shadow-lg transition duration-300 transform hover:scale-105 border-2 hover:border-blue-500`}
                        >
                            <ManageIcon width={25} height={25} />
                            <p className="text-sm mt-2">{option.label}</p>
                        </Link>
                    )
                })}
            </div>

        </div>
    );
};

export default Manage;