namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        POSTGRES_URL: string
        POSTGRES_PRISMA_URL: string
        POSTGRES_URL_NON_POOLING: string
        POSTGRES_USER: string
        POSTGRES_HOST: string
        POSTGRES_PASSWORD: string
        POSTGRES_DATABASE: string
    }
}
