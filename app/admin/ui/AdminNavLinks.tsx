'use client';

import { HomeIcon, PuzzlePieceIcon, CurrencyRupeeIcon, WalletIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/admin', icon: HomeIcon },
    { name: 'Matches', href: '/admin/matches', icon: PuzzlePieceIcon },
    { name: 'Users', href: '/admin/users', icon: UserGroupIcon },
    { name: 'Earnings', href: '/admin/earnings', icon: CurrencyRupeeIcon },
    { name: 'Wallet', href: '/admin/wallet', icon: WalletIcon },
];

export default function AdminNavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'bg-sky-100 text-blue-600' : ''}`}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}