import qs from 'qs';
const CLIENT_ID = '1441f619b235d03';
const ROOT_URL = 'https://api.imgur.com';
export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    }
}