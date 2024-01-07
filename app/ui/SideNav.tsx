import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import NavLinks from '@/app/ui/NavLinks';
import Logout from '@/app/ui/logout/Logout';
import Login from '@/app/ui/login/Login';
import UserDropDown from '@/app/ui/UserDropDown';
import AdminNavLinks from '@/app/admin/ui/AdminNavLinks';

// const user = {
//     name: "Nikhil BK",
//     username: "NBK",
//     imageUrl: ""
// }

export default async function SideNav() {
    const session = await getServerSession();
    const userSession = session?.user;
    // console.log(userSession)
    const userDetails = await getUserByEmail(userSession?.email || "");
    const user = { ...userDetails, image: "" }

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="flex h-20 items-end justify-between rounded-md bg-blue-600 p-4 md:h-40 items-center">
                <div className={`${lusitana.className} text-white text-2xl xs:text-[2.5rem] sm:leading-[inherit] font-bold capitalize`}>
                    Fantasy Heaven
                </div>

                <UserDropDown user={user} />

            </div>

            <div className='hidden md:flex gap-3 items-center px-3 py-3 bg-white'>
                <Image src={user?.image || "/assets/icons/profile-placeholder.svg"} alt='profile' width={40} height={40} className='rounded-full ml-2' />
                <div className='flex flex-col'>
                    <p className='font-medium capitalize'>{user?.name || 'Guest'}</p>
                    <p className='text-xs text-light-3 text-blue-600'>@{user?.username || 'guest'}</p>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full z-10 bg-white md:relative px-3   flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {
                    user.role == 'admin' ?
                        <AdminNavLinks /> :
                        <NavLinks />
                }
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>

                {!session ? <Login /> : <Logout />}

            </div>
        </div>
    );
}