import { GetStaticProps } from "next";
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
    const values = await prisma.users.findUnique({
        where: { id: 1 },
    
    })
    return {
        props: { values },
        revalidate: 10,
    }
}

export default function HomePage() {
    return (
        <div>
            this is a test
        </div>
    )
}