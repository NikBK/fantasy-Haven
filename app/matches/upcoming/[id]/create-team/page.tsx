import MakeMyTeam from '@/app/ui/matches/MakeMyTeam';

const CreateTeam = ({ params }: { params: { id: string } }) => {
    return (
        <>
            <MakeMyTeam match_id={params.id} />
        </>
    )
}

export default CreateTeam;
