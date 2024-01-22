import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';

const UpdatePlayer = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Update Player', href: '/admin/manage/update-player', active: true },
            ]} />
            <h2 className="text-xl font-bold mb-4">Update Player</h2>
            {/* Your form or UI for creating a Player */}
        </div>
    );
};
export default UpdatePlayer;