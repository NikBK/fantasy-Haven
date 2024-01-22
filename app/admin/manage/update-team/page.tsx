import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';

const UpdateTeam = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Update Team', href: '/admin/manage/update-team', active: true },
            ]} />
            <h2 className="text-xl font-bold mb-4">Update Team</h2>
            {/* Your form or UI for creating a match */}
        </div>
    );
};
export default UpdateTeam;