// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
    login: handleLogin({
        authorizationParams: {
            audience: 'https://dev-i2b0h6hmsuwdiay8.jp.auth0.com/api/v2/',
            scope: 'openid profile email read:current_user'
        }
    })
});