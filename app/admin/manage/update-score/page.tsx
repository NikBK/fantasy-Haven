import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';

const UpdateScore = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Update Score', href: '/admin/manage/update-score', active: true },
            ]} />
            <h2 className="text-xl font-bold mb-4">Update Score</h2>
            {/* Your form or UI for creating a match */}
        </div>
    );
};
export default UpdateScore;