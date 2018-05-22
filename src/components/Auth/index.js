import auth0 from 'auth0-js'
import {AUTH_CONFIG} from './auth0-variables'
import {navigateTo} from 'gatsby-link'

let ls;
try{
    ls = localStorage;
}
catch(err){
    ls = null;
    console.log(err);
}
const localStorage = ls;

class Auth {
    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        redirectUri: AUTH_CONFIG.callbackUrl,
        // audience: `https://${AUTH_CONFIG.domain}/userinfo`,
        audience: `https://${AUTH_CONFIG.audience}`,
        responseType: 'token id_token',
        scope: 'openid email profile',
    })

    constructor() {
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.getUser = this.getUser.bind(this)
    }

    login() {
        this.auth0.authorize()
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log(authResult)
                this.setSession(authResult)
                return
            }
            navigateTo('/dashboard')
            console.log(err)
            alert(`Error: ${err.error}. Check the console for further details.`)
        })
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        )
        if (!localStorage) return;
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)
        localStorage.setItem('expires_at', expiresAt)
        localStorage.setItem('user', JSON.stringify(authResult.idTokenPayload))

        navigateTo('/dashboard')
    }

    logout() {
        // Clear access token and ID token from local storage
        if (!localStorage) return;
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user');
        navigateTo('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        if (!localStorage) return;
        let expiresAt = localStorage.getItem('expires_at');
        try {
            expiresAt = JSON.parse(expiresAt);
        }
        catch(e){console.log(e)}
        return new Date().getTime() < expiresAt;
    }

    getUser() {
        if (!localStorage) return;
        let user = localStorage.getItem('user');
        try{
            user = JSON.parse(user);
        }
        catch (err) {
            console.log(err);
        }
        return user;
    }
    getAccessToken() {
        if (!localStorage) return;
        let access_token = localStorage.getItem('access_token');
        try{
            access_token = JSON.parse(access_token);
        }
        catch (err) {
            console.log(err);
        }
        return access_token;
    }
    getIdToken() {
        if (!localStorage) return;
        let id_token = localStorage.getItem('id_token');
        try{
            id_token = JSON.parse(id_token);
        }
        catch (err) {
            console.log(err);
        }
        return id_token;
    }
}

const auth0Client = new Auth();

export default auth0Client;
