'use client';

import { XMarkIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation";

const CloseButton = ({ redirectTo }: { redirectTo: string }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(redirectTo);
    }

    return (
        <XMarkIcon width={30} height={30} className='cursor-pointer absolute right-5' onClick={handleClick} />
    )
}

export default CloseButton
