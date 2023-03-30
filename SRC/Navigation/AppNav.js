import {StatusBar} from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppIntro from './Routes/Route';

import { colors } from '../Constant/DesignConstant';
import { AuthContext } from '../Context/AuthContext';
import Loader from '../Custom/Loader';
import TabNavigation from './TabNavigation/TabNavigation';

const AppNav = () => {
  const{UserToken,isLoading} =useContext(AuthContext);

  if(isLoading){
    return(
<Loader />
    )
  }

  return (
    <NavigationContainer>
    <StatusBar backgroundColor={colors.TabColor} barStyle="light-content" />
   {UserToken !==null ?  <TabNavigation /> :<AppIntro/>}
     </NavigationContainer>
  )
}

export default AppNav