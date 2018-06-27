export const AUTH_CONFIG = {
    domain: 'orin0c0.auth0.com',
    //domain: 'localhost-usani.auth0.com',
    clientId: 'UoF7FMGy4S_SlURMD40tMNkb3dKtvB7w',
    //clientId: 'Trd8O1sfmDkqJZaZMZ734qw8ggiNPhuu',
    callbackUrl: window.location.href.indexOf('localhost') !== -1 ?
        'http://localhost:8000/callback' :
        window.location.href+'callback'
    //callbackUrl: 'http://localhost:8000/callback',
    // audience: 'orin0c0.api.com',
}
