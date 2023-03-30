import Config from "../Config/Config";
import { axiosInstanceWithAuth } from "./Config";
import axios from "./index";



class AuthApi {
    static SignIn = (data) => {
        console.log(data)
        return axiosInstanceWithAuth.post(`${Config.APIURL}/login`, data);
      };
      
}

export default AuthApi;
