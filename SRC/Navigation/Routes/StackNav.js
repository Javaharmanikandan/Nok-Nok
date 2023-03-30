import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RequestPage from '../../Screens/Interviews/RequestList/RequestPage';
import Interviews from '../../Screens/Interviews/Interviews';
import GiveInterViews from '../../Screens/Interviews/GiveinterViews/GiveInterViews';
import ReadInterviews from '../../Screens/Interviews/ReadInterViews/ReadInterviews';
import SuggestedInterviews from '../../Screens/Interviews/SuggestedInterviews/Suggestedinterview';
import Collections from '../../Screens/Collections/Collections';
import DiscoverPage from '../../Screens/Collections/components/DiscoverMediaHouse/DiscoverPage';
import RecentlyExploredPage from '../../Screens/Collections/components/RecentBox/RecentlyExploredPage';
import PopularHousePage from '../../Screens/Collections/components/PopularHouse/PopularHousePage';
import CategoryPage from '../../Screens/Collections/components/Category/CategoryPage';
import MediaHouseProfile from '../../Screens/Collections/components/DiscoverMediaHouse/MediaHouseProfile';
import CreatePage from '../../Screens/CreatePage/CreatePage';
import QuotePage from '../../Screens/CreatePage/QuotePage';
import Home from '../../Screens/Home/Home';
import TopTrendingPage from '../../Screens/Home/TopTrendingInterviews/TopTrendingPage';
import PopularPage from '../../Screens/Home/PopularInterviews/PopularPage';
import Profile from '../../Screens/Profile/Profile';
import LikedPage from '../../Screens/Profile/components/LikedPage';
import BookmarkPage from '../../Screens/Profile/components/BookmarkPage';
import SettingsPage from '../../Screens/Profile/components/Settings/SettingsPage';
import MyQuotes from '../../Screens/CreatePage/components/MyQuotes';
import DraftsPage from '../../Screens/CreatePage/components/DraftsPage';
import Card  from '../../Screens/Interviews/Components/Card'
import ProUserCard from '../../Screens/Interviews/ProUser/ProUserCard';


const StackConfig = { headerShown: false};
const HomeStack = createNativeStackNavigator();
const InterviewStack = createNativeStackNavigator();
const CollectionStack = createNativeStackNavigator();
const CreatePages = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();


export function Interview() {
    return (
        <InterviewStack.Navigator screenOptions={StackConfig} initialRouteName="Interview" >
        <InterviewStack.Screen name="Interview" component={Interviews}/>
        <InterviewStack.Screen name="RequestPage" component={RequestPage}/>
        <InterviewStack.Screen name="GiveInterViews" component={GiveInterViews}/>
        <InterviewStack.Screen name="ReadInterviews" component={ReadInterviews}/>
        <InterviewStack.Screen name="SuggestedInterviews" component={SuggestedInterviews}/>
        </InterviewStack.Navigator>
    );
    }
export function Collection() {
    return (
        <CollectionStack.Navigator screenOptions={StackConfig} initialRouteName="Collections">
        <CollectionStack.Screen name="Collections" component={Collections} />
        <CollectionStack.Screen name="DiscoverPage" component={DiscoverPage} />
        <CollectionStack.Screen name="RecentlyExploredPage" component={RecentlyExploredPage} />
        <CollectionStack.Screen name="PopularHousePage" component={PopularHousePage} />
        <CollectionStack.Screen name="CategoryPage" component={CategoryPage} />
        <CollectionStack.Screen name="MediaHouseProfile" component={MediaHouseProfile} />
        </CollectionStack.Navigator>
    );
}

export function Create() {
    return (
        <CreatePages.Navigator screenOptions={StackConfig} initialRouteName="CreatePage">
        <CreatePages.Screen name="CreatePage" component={CreatePage} />
        <CreatePages.Screen name="QuotePage" component={QuotePage} />
        <CreatePages.Screen name="MyQuotes" component={MyQuotes} />
        <CreatePages.Screen name="DraftsPage" component={DraftsPage} />
        </CreatePages.Navigator>
    );
}

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={StackConfig} initialRouteName="Homes">
        <HomeStack.Screen name="Homes" component={Home} />
        <HomeStack.Screen name="TopTrendingPage" component={TopTrendingPage} />
        <HomeStack.Screen name="PopularPage" component={PopularPage} />
        <HomeStack.Screen name="ReadInterviews" component={ReadInterviews} />
        <HomeStack.Screen name="SuggestedInterviews" component={SuggestedInterviews} />
        <HomeStack.Screen name="DiscoverPage" component={DiscoverPage} />
        <HomeStack.Screen name="ProUserCard" component={ProUserCard} />
        </HomeStack.Navigator>
    );
}

export function ProfileScreen() {
    return (
        <ProfileStack.Navigator screenOptions={StackConfig} initialRouteName="Profile">
        <ProfileStack.Screen name="Profiles" component={Profile} />
        <ProfileStack.Screen name="LikedPage" component={LikedPage} />
        <ProfileStack.Screen name="BookmarkPage" component={BookmarkPage} />
        <ProfileStack.Screen name="SettingsPage" component={SettingsPage} />
        <ProfileStack.Screen name="Read" component={ReadInterviews}/>
        </ProfileStack.Navigator>
    );
}