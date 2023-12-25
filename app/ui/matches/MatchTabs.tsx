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
        <div className='grid grid-cols-3 uppercase sticky -top-4 bg-[#f0f8ff]'>
            {matchTabs.map((tab: { title: string, link: string }, index: number) =>
                <Link
                    href={tab.link}
                    key={index}
                    className={`${pathname == tab.link ? 'bg-indigo-500 text-white' : ''} ${index == 0 ? 'rounded-s-2xl' : index == 2 ? 'rounded-e-2xl' : ''} py-2 px-2 sm:px-4 hover:bg-indigo-500 overflow-hidden`}
                >
                    {tab.title}
                </Link>
            )}
        </div>
    )
}

export default MatchTabs;
