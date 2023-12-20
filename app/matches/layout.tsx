import { ReactNode } from 'react';
import MatchTabs from '@/app/ui/matches/MatchTabs';

const layout = ({ children }: { children: ReactNode }) => {

    return (
        <div className='flex flex-col w-full'>
            <MatchTabs />
            <div className='py-2 flex flex-col items-center w-full lg:p-8'>
                {children}
            </div>
        </div>
    )
}

export default layout
