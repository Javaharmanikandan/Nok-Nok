import React from 'react'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TabBar from './TabBar'
import { Interview,Collection,Create,HomeStackScreen,ProfileScreen} from '../Routes/StackNav'
const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator 
    tabBar={props=> <TabBar {...props}/>}>
      <Tab.Screen name="Home" component={HomeStackScreen}  initialParams={{icon:'home'}} options={{headerShown:false}} />
      <Tab.Screen name="Interviews" component={Interview} initialParams={{icon:'message-circle',value:'ProUser'}} options={{headerShown:false}} />
      <Tab.Screen name="CreatePages" component={Create} initialParams={{icon:'plus-circle'}} options={{headerShown:false}}/>
      <Tab.Screen name="collections" component={Collection} initialParams={{icon:'align-center'}} options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{icon:'user'}} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}


export default TabNavigation