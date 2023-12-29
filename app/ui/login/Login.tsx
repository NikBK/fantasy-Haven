'use client';

import { PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Login = () => {

    return (
        <button className="flex h-[48px] md:w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <Link href={'/login'} className="hidden md:block">Sign In</Link>
        </button>
    )
}

export default Login;
