import axios from 'axios';
import * as Config from './../constants/Config';

export default function callApiLogin(endpoint, method ='POST', body) {
    return axios({
        method: method,
        url: `${Config.API_URL_LOGIN}/${endpoint}`,
        data: body,
        headers: { 'content-type': 'application/json' },
    }).catch(err => {
        console.log(err);
    });
}