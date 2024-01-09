'use client';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteUser } from '@/app/admin/api/actions';
import { useRouter } from 'next/navigation';

const EditButtons = ({ user_id }: { user_id: string }) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/admin/users/${user_id}/edit`);
    }

    const handleDelete = async () => {
        const confirmDelete = confirm("Are you sure, you want to delete user from DB ?");

        if (confirmDelete) {
            await deleteUser(user_id);
            router.refresh();
        }
    }

    return (
        <>
            <PencilIcon className="mr-2 h-4 w-4 rounded-full cursor-pointer hover:text-red-500" onClick={handleEdit} />
            <TrashIcon className="mr-2 h-4 w-4 rounded-full cursor-pointer hover:text-red-500" onClick={handleDelete} />
        </>
    )
}

export default EditButtons
