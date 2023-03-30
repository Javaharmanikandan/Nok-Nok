import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { colors,LightThemeColors ,fontfamily } from '../../Constant/DesignConstant';
import ProfileHeader from './components/ProfileHeader';
import MediaHouseBar from './components/MediaHouseBar';
import TabBar from './components/TabBar';
import CreatePost from '../CreatePage/components/CreatePost';
import { AuthContext } from '../../Context/AuthContext';
const Profile = () => {
  const {darktheme}=useContext(AuthContext);
  return (
    <View style={styles.container(darktheme)}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <View style={styles.components(darktheme)}>
  
      <ProfileHeader/> 
      <MediaHouseBar/>
      <TabBar/>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: darktheme => ({
    flex: 1,
    backgroundColor: darktheme ? colors.backgroundcolor :LightThemeColors.backgroundcolor  ,
  
  }),
  components: darktheme => ({
    flex: 1,
    backgroundColor: darktheme ? colors.backgroundcolor :LightThemeColors.backgroundcolor ,
    alignItems: 'center',
     paddingBottom: 75,
  }),
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primarycolor,
    fontFamily: fontfamily.fontfamily,
  }
  
})