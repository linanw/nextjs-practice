import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function products(req, res) {
    // If your access token is expired and you have a refresh token
    // `getAccessToken` will fetch you a new one using the `refresh_token` grant
    const { accessToken } = await getAccessToken(req, res, {
        // scopes: ['read:current_user']
    });
    // console.log(accessToken);
    const response = await fetch('https://api0.stg.platox.ai/users/me/idps/google-oauth2', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    const idpProfile = await response.json();
    // console.log(idpProfile.access_token);
    const response1 = await fetch(`https://gmail.googleapis.com/gmail/v1/users/${idpProfile.user_id}/profile`, {
        headers: {
            Authorization: `Bearer ${idpProfile.access_token}`
        }
    });
    const gmailProfile = await response1.json();
    // console.log(gmailProfile);
    res.status(200).json({ gmailProfile: gmailProfile });
});

