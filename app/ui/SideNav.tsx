// import Link from 'next/link';
import NavLinks from '@/app/ui/NavLinks';
// import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

const user = {
    name: "Nikhil BK",
    username: "NBK",
    imageUrl: ""
}

export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div
                className="flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
            // href="/"
            >
                <div className="w-32 text-white md:w-40">
                    {/* <AcmeLogo /> */}
                </div>
            </div>
            <div className='flex gap-3 items-center px-3 py-3 bg-white'>
                <img src={user.imageUrl || "/assets/icons/profile-placeholder.svg"} alt='profile' className='h-10 w-10 rounded-full ml-2' />
                <div className='flex flex-col'>
                    <p className='font-medium'>{user.name || 'Guest'}</p>
                    <p className='text-xs text-light-3 text-blue-600'>@{user.username || 'guest'}</p>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full z-10 bg-white md:relative px-3   flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                {/* <form
          action={async () => {
            'use server';
            await signOut();
          }}
        > */}
                <button className="flex h-[48px] md:w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                </button>
                {/* </form> */}
            </div>
        </div>
    );
}