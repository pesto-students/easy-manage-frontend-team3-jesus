import Axios from "axios";

export const LOGIN_TOKEN_KEY = 'loginToken'
const BASE_URL = 'https://jymspace-api.herokuapp.com'

class NetworkManagerClass {
    constructor() {
        Axios.interceptors.request.use(
            config => {
              config.headers['Authorization'] = `Bearer ${sessionStorage.getItem(LOGIN_TOKEN_KEY)}`;
                  return config;
              },
              error => {
                  return Promise.reject(error);
              }
          );
    }

   get(url){
    return Axios.get(`${BASE_URL}/${url}`)
   }

   post(url,data){
    return Axios.post(`${BASE_URL}/${url}`,data)
   }
}

export const NetworkManager = new NetworkManagerClass()
