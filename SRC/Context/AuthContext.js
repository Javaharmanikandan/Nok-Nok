import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import AuthApi from "../Api/ApiCalls";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [UserToken, setUserToken] = useState(null);
  const [UserInfo, setUserInfo] = useState({});
  const [darktheme, setDarktheme] = useState(true);

  //For Login Action
  const signInAction = async (data) => {
    console.log(data)
    setIsLoading(true);
    setUserToken("Abcedefghi");
    AsyncStorage.setItem("userToken", "Abcedefghi");
    AsyncStorage.setItem('refreshToken',"FSUYDGUGSUDGUS");
    // AsyncStorage.setItem("userInfo", []);
    setIsLoading(false);
  };
  //For Logout Action
  const signOutAction = async () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("refreshToken");
    // AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };
  //TO check User Loged In or Not
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
        console.log(`isLogged in Error ${e}`)
    }
  };

    //TO check User Loged In or Not
    const themeModeUpdate = async (theme) => {
      try {
        console.log(theme)
        setDarktheme(theme);
        
      } catch (e) {
          
      }
    };

  useEffect(()=>{
   isLoggedIn()
  },[])

  return (
    <AuthContext.Provider
      value={{ signInAction, signOutAction, UserToken, isLoading ,themeModeUpdate,darktheme}}
    >
      {children}
    </AuthContext.Provider>
  );
};
