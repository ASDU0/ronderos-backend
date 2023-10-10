
export const config = () => ({
    mongoConnectionString: process.env.MONGODB_URL as string,
});