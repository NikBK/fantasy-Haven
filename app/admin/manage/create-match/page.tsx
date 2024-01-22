import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';
import CreateMatchForm from '@/app/admin/ui/manage/CreateMatchForm';

const CreateMatch = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Create Match', href: '/admin/manage/create-match', active: true },
            ]} />
            <CreateMatchForm />
        </div>
    );
};
export default CreateMatch;

