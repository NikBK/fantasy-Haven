"use client";

import Image from 'next/image';
import React, { useState } from 'react';

type userType = {
    image: string;
    id: string;
    name: string;
    email: string;
    password: string;
    username: string;
}

{/* Toggle dropdown when the user clicks on the image */ }
const UserDropDown = ({ user }: { user: userType }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative md:hidden cursor-pointer">
            <Image src={user?.image || "/assets/icons/profile-placeholder.svg"} alt='profile' width={40} height={40} className='md:hidden rounded-full' />

            {/* Triangle symbol for tooltip effect */}
            <div className={`absolute top-full right-1/2 transform translate-x-1/2 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                <div className="w-3 h-3 bg-white border-t border-l border-r border-gray-300 rotate-45"></div>
            </div>

            {/* Dropdown content */}
            {isDropdownOpen && (
                <div className='absolute top-11 right-0 bg-white p-2 rounded-md shadow-md min-w-max'>
                    <p className='font-medium capitalize'>{user?.name || 'Guest'}</p>
                    <p className='text-xs text-light-3 text-blue-600'>@{user?.username || 'guest'}</p>
                </div>
            )}
        </div>
    )
}

export default UserDropDown;
