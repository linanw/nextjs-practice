'use client'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default withPageAuthRequired(function Profile({ user }) {
    const { error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    console.log(user);

    return (
        user && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
});