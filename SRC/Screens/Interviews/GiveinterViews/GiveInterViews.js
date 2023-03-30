import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors,LightThemeColors, fontfamily,fontsize,fontWeight } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import Card from '../Components/Card'
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

const GiveInterViews = ({route}) => {

  const {darktheme}=useContext(AuthContext);

    const activeTab = route.params.item
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
       <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                <SvgXml xml={leftArrow} width="20" height="16" />
                <Text style={styles.text}>Give Interview</Text> 
              </TouchableOpacity>
            <Text style={styles.text}>Help</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}> 
         <Card activeTab={activeTab}/>
         </ScrollView>
    </View>
  )
}

export default GiveInterViews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: 'absolute',
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70,
  },
  header: {
    padding: 10,
    marginTop: 10,
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
  icon: {
    marginRight: 15,
  },

  
})