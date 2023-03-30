import {StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant'
import AccountSec from './components/AccountSec';
import ContentSec from './components/ContentSec';
import OthersSec from './components/OthersSec';
import AboutSec from './components/AboutSec';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const LikedPage = () => {

  const {darktheme}=useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <View style={styles.container(darktheme)}>
    <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
    <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
            <SvgXml xml={leftArrow} width="20" height="16" />
            <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
        </View>
        <ScrollView style={styles.listView}>
        <AccountSec />
        <ContentSec />
        <OthersSec />
        <AboutSec />
          </ScrollView>
    </View>
  )
}

export default LikedPage

const styles = StyleSheet.create({
  container: darktheme => ({
    flex: 1,
    backgroundColor: darktheme ? colors.backgroundcolor :LightThemeColors.backgroundcolor  ,
  
  }),
header: {
    padding: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
},
text: {
    fontSize: fontsize.subheading,
    color: colors.HeadingProfileTitles,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.regular,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3 : fontfamily.fontRegular2,
    marginLeft: 10,
},
listView: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:75,
  

},
})