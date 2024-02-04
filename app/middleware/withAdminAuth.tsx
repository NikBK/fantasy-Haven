import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { getUserByEmail } from '@/app/lib/data';
import Link from 'next/link';

const withAdminAuth = (WrappedComponent: React.ComponentType<any>) => {
    return async ({ ...props }) => {
        const session = await getServerSession();
        const userEmail = session?.user?.email || '';
        const user = await getUserByEmail(userEmail);
        // Redirect unauthenticated users to login page
        if (!session) {
            return <Link href={'/login'}>Please login </Link>; // Or redirect to login page
        }

        // Redirect users without admin role
        if (!user.role.includes('admin')) {
            return <div>Access Denied. You do not have the required role.</div>; // Or redirect to homepage
        }

        // Render the protected component
        return <WrappedComponent {...props} />;
    };
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    // const session = await getSession(context);
    const session = await getServerSession();

    return {
        props: {
            session,
        },
    };
};

export default withAdminAuth;
