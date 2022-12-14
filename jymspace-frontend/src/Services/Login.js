import { SERVICE_URLS } from './ServiceUrls'
import {LOGIN_TOKEN_KEY,NetworkManager} from '../Utility'

export function authenticateGYM({ email,password},cb,errorCb) {
    NetworkManager.post(SERVICE_URLS.AUTHENTICATE_GYM, {
        email: email,  
        password: password,
      }).then((response) => {
        if (response.data) {
          window.sessionStorage.setItem(LOGIN_TOKEN_KEY, response.data.token)
          console.log(response.data);
          cb()
        } else console.log("invalid user");
      }).catch(errorCb);
}