import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';

const CreateTeam = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Create Team', href: '/admin/manage/create-team', active: true },
            ]} />
            <h2 className="text-xl font-bold mb-4">Create Team</h2>
            {/* Your form or UI for creating a match */}
        </div>
    );
};
export default CreateTeam;