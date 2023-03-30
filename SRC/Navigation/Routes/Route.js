import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../TabNavigation/TabNavigation';
import LoginPage from '../../Screens/LoginScreen/LoginPage';
import SignUp from '../../Screens/LoginScreen/SignUp';
import WelcomePage from '../../Screens/LoginScreen/WelcomePage';
import InterestedPage from '../../Screens/LoginScreen/InterestedPage';
import SplashScreen from '../../Screens/SplashScreen/SplashScreen';


const StackConfig = { headerShown: false};
const HomeStack = createNativeStackNavigator();

export default function AppIntro() {
    return (
        <HomeStack.Navigator screenOptions={StackConfig} initialRouteName="SplashScreen">
        <HomeStack.Screen name="SplashScreen" component={SplashScreen}/>
        <HomeStack.Screen name="LoginPage" component={LoginPage}/>
        <HomeStack.Screen name="SignUp" component={SignUp}/>
        <HomeStack.Screen name="WelcomePage" component={WelcomePage}/>
        <HomeStack.Screen name="InterestedPage" component={InterestedPage}/>
        <HomeStack.Screen name="TabNavigation" component={TabNavigation}/>
        </HomeStack.Navigator>
    );
}