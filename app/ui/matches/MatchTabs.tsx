'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const matchTabs = [
    {
        title: 'Upcoming',
        link: '/matches/upcoming'
    },
    {
        title: 'Live',
        link: '/matches/live'
    },
    {
        title: 'Past',
        link: '/matches/past'
    }
]

const MatchTabs = () => {
    const pathname = usePathname();

    return (
        <div className='grid grid-cols-3 gap-1 sm:gap-2 uppercase sticky -top-4 bg-[#f0f8ff]'>
            {matchTabs.map((tab: { title: string, link: string }, index: number) =>
                <Link
                    href={tab.link}
                    key={index}
                    className={`${pathname == tab.link ? 'bg-indigo-500 text-white' : ''} py-2 px-2 sm:px-4 rounded-t-xl hover:bg-indigo-500 overflow-hidden`}
                >
                    {tab.title}
                </Link>
            )}
        </div>
    )
}

export default MatchTabs;
