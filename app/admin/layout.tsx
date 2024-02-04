import withAdminAuth from '@/app/middleware/withAdminAuth'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {children}
        </>
    )
}

export default withAdminAuth(layout);
