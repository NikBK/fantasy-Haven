export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/wallet', '/earnings', '/admin/:path*']
};