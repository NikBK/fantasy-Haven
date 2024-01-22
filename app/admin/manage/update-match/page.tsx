import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';

const UpdateMatch = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Update Match', href: '/admin/manage/update-match', active: true },
            ]} />
            <h2 className="text-xl font-bold mb-4">Update Match</h2>
            {/* Your form or UI for creating a match */}
        </div>
    );
};
export default UpdateMatch;