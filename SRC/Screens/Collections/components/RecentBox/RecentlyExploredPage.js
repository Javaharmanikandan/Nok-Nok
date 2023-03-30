import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView,ScrollView } from 'react-native'
import React from 'react';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { colors,fontWeight,fontfamily,fontsize } from '../../../../Constant/DesignConstant';
import RecentListCard from './RecentListCard';
import { DiscoverMediaData } from '../../../../Constant/DataConstant';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const search = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const RecentlyExploredPage = () => {
    const navigation = useNavigation();
    const {darktheme}=useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
          <SvgXml xml={leftArrow} width="20" height="16" />
          <Text style={styles.text}>Recently Explored</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity >
            <SvgXml xml={search} width="20" height="20" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false} fadingEdgeLength={100} style={styles.RecentBox}>
          <RecentListCard data={DiscoverMediaData} />
          <RecentListCard data={DiscoverMediaData} />
        </ScrollView>
    </View>
  )
}

export default RecentlyExploredPage

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.backgroundcolor,
        paddingBottom:70,
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
      icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
      },
      RecentBox:{
        marginTop:20,
      }
  
})