import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity, Platform } from 'react-native'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'

const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const search = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const more = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
<path d="M10 6.001H22M6 6.011L6.01 6M6 12.011L6.01 12M10 12.001H22" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="27" height="17.011" rx="3.5" stroke="#7A7A7A"/>
</svg>`
const filter=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
<path d="M14.6668 1H1.3335L6.66683 7.30667V11.6667L9.3335 13V7.30667L14.6668 1Z" stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


const ListTab = [
    {
      screen: 'Read Interviews'
    },
    {
      screen: 'Completed'
    }
  ]
const RequestPage = () => {
  const {darktheme}=useContext(AuthContext);

  const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState('Read Interviews')
  const [data, setData] = useState('')
  const [userType, setuserType] = useState(true)
  const [cardview, setCardview] = useState(true)
//   useEffect (()=>{
//     setData([...cardData.filter(item=>item.active === true)])
//     },[])

  const handleTab = activeTab => {
  
    setActiveTab(activeTab)
    if (activeTab === 'Read Interviews') {
    //   setData([...cardData.filter(item=>item.active === true)])
    }
    if (activeTab === 'Completed') {
    //   setData([...cardData.filter(item=>item.active === false)])
    }

  }
  return (
    <View style={styles.container}>
       <SafeAreaView style={{ backgroundColor: colors.tabbarcolorbackgroundcolor }} />
          <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row' }}>
                <SvgXml xml={leftArrow} width="20" height="16" />
                <Text style={styles.text}>Interview Requests</Text>
              </TouchableOpacity>
            <View style={{ flexDirection: 'row',alignItems:'center',justifyContent:'center' }}>
                    <TouchableOpacity style={styles.filterbox}>
                        <Text style={styles.filtertext}>Recent</Text>
                        <SvgXml xml={filter} style={styles.icon} />
                    </TouchableOpacity>
              <TouchableOpacity>
                <SvgXml xml={search} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.headerTab}>
            {ListTab.map((item, index) => {
              return (
                <TouchableOpacity style={[styles.button, activeTab === item.screen && styles.active]} onPress={() => handleTab(item.screen)} key={index}>
                  <Text key={index} style={[activeTab === item.screen ? styles.activeText : styles.text1]}>{item.screen}</Text>
                </TouchableOpacity>
              )})}
          </View>
   
    </View>
  )
}

export default RequestPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
      },
      header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
      },
      text: {
        fontSize: fontsize.subheading,
        color: colors.HeadingProfileTitles,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular3: fontfamily.fontRegular2,
        marginLeft: 10,
      },
      icon: {
        marginRight: 15,
      },
      headerTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
      },
      button: {
        backgroundColor: colors.TabColor,
        padding: 10,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      active: {
        backgroundColor: colors.TabSelectedColor,
      },
      text1: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.medium,
        fontFamily: fontfamily.fontRegular,
      },
      activeText: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
      },
      icon1: {
        marginLeft: 10,
      },
      text0: {
        fontSize: fontsize.numbers,
        color: colors.primarycolor,
        fontWeight: fontWeight.bold,
        fontFamily: fontfamily.fontRegular, 
      },
      text00: {
        fontSize: fontsize.numbers,
        color: colors.PostDescriptionAnswer,
        fontWeight: fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
        marginLeft: 10,
      },
        filterbox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.PostDescriptionAnswer,
        borderRadius: 15,
        padding: 5,
        marginRight: 20, 
        },
        filtertext: {
        fontSize: fontsize.paragraph,
        color: colors.HeadingProfileTitles,
        fontWeight: fontWeight.regular,
        fontFamily: fontfamily.fontRegular,
        marginLeft: 15,
        marginRight: 5, 
        },
       


})