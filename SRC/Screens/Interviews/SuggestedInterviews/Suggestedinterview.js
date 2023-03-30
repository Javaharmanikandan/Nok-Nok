import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors,LightThemeColors, fontWeight, fontsize, fontfamily } from '../../../Constant/DesignConstant'
import Card from '../../Home/PopularInterviews/Card'
import {PopularInterviewCardData} from '../../../Constant/DataConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const Suggestedinterview = () => {
  const {darktheme}=useContext(AuthContext);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
    <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
            <SvgXml xml={leftArrow} width="20" height="16" />
            <Text style={styles.text}>Suggested Interviews</Text>
        </TouchableOpacity>
        </View>
      <ScrollView style={styles.listView}>
                {PopularInterviewCardData.map((item, index) => {
                    return (
                      <TouchableOpacity key={index} onPress={() => navigation.navigate('ReadInterviews', { item: item })}>
                        <Card key={index}
                            profilePic={item.profilePic}
                            profileName={item.profileName}
                            tag={item.tag}
                            statement1={item.statement1}
                            statement2={item.statement2}
                            width={358}
                            onPress={() => navigation.navigate('ReadInterviews', { item: item })}
                        />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
    </View>
  )
}

export default Suggestedinterview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
    paddingBottom: 70,
  },
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
  marginTop: 10,
  marginLeft: 10,
  marginRight: 10,
},

})