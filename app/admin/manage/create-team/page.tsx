import Breadcrumbs from '@/app/admin/ui/BreadCrumbs';
import CreateTeamForm from '@/app/admin/ui/manage/CreateTeamForm';

const CreateTeam = () => {
    return (
        <div className="p-4 rounded">
            <Breadcrumbs breadcrumbs={[
                { label: 'Manage', href: '/admin/manage' },
                { label: 'Create Team', href: '/admin/manage/create-team', active: true },
            ]} />
            <CreateTeamForm />
        </div>
    );
};
export default CreateTeam;