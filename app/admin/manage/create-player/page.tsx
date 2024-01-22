import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';

const CreatePlayer = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Create Player', href: '/admin/manage/create-player', active: true },
            ]} />
            <h2 className="text-xl font-bold mb-4">Create Player</h2>
            {/* Your form or UI for creating a Player */}
        </div>
    );
};
export default CreatePlayer;