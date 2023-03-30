import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';
import Card from '../Card'
import { ReadInterviewsData } from '../../../Constant/DataConstant';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'


const leftArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.50001C0 8.79543 0.415671 10.0046 1.13493 11.0278L0.412082 13.5578C0.232474 14.1863 0.813661 14.7675 1.44228 14.5879L4.65454 13.6702C5.05611 13.8166 5.47513 13.933 5.90807 14.0162C5.9081 14.0163 5.90805 14.0162 5.90807 14.0162C6.42105 14.1148 6.95362 14.1668 7.49977 14.1668C7.63958 14.1668 7.77851 14.1633 7.91644 14.1566C7.91628 14.1566 7.91659 14.1566 7.91644 14.1566C11.8651 13.9648 15 11.0578 15 7.50001C15 3.81811 11.6422 0.833344 7.5 0.833344C3.35787 0.833344 0 3.81811 0 7.50001ZM2.73747 11.4857C2.87574 11.0017 2.78789 10.4811 2.49843 10.0693C1.96285 9.30743 1.66667 8.42943 1.66667 7.50001C1.66667 4.91771 4.08837 2.50001 7.5 2.50001C10.9117 2.50001 13.3333 4.91771 13.3333 7.50001C13.3333 10.0823 10.9117 12.5 7.5 12.5C6.68791 12.5 5.92037 12.3578 5.22568 12.1044C4.89516 11.9838 4.53496 11.9709 4.19667 12.0676L2.4267 12.5733L2.73747 11.4857Z" fill="#CCCCCC"/>
<path d="M16.2782 5.07324C16.514 5.78577 16.6487 6.54408 16.6648 7.33737C17.7156 8.2673 18.3332 9.52933 18.3332 10.8334C18.3332 11.7628 18.037 12.6408 17.5014 13.4027C17.212 13.8145 17.1241 14.3351 17.2624 14.819L17.5732 15.9067L15.8032 15.401C15.4649 15.3043 15.1047 15.3172 14.7742 15.4377C14.0795 15.6912 13.3119 15.8334 12.4998 15.8334C11.6842 15.8334 10.9252 15.6952 10.2422 15.4496C9.3799 15.6964 8.47015 15.8297 7.53882 15.8333C8.86099 16.8707 10.5977 17.5001 12.4998 17.5001C13.507 17.5001 14.4678 17.3236 15.3453 17.0035L18.5576 17.9213C19.1862 18.1009 19.7674 17.5197 19.5877 16.8911L18.8649 14.3612C19.5842 13.3379 19.9998 12.1288 19.9998 10.8334C19.9998 8.37617 18.5043 6.22948 16.2782 5.07324Z" fill="#CCCCCC"/>
</svg>`
const rightArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
<path d="M1.5 11L6.5 6L1.5 1" stroke="#CCCCCC" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const search = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 17.5L13.875 13.875" stroke="#A8A8A8" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
const more = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
<path d="M10 6.001H22M6 6.011L6.01 6M6 12.011L6.01 12M10 12.001H22" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="27" height="17.011" rx="3.5" stroke="#7A7A7A"/>
</svg>`
const leftArrow1 = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path d="M8 15L1 8M1 8L8 1M1 8H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`



const ListTab = [
  {
    screen: 'Read Interview'
  },
  {
    screen: 'Give Interview'
  }
]

const ProUserCard = (route) => {
  const {darktheme}=useContext(AuthContext);

  const Navigation = useNavigation()
  const [activeTab, setActiveTab] = useState('Read Interview')
  const [data, setData] = useState(ReadInterviewsData)
  const [userType, setuserType] = useState(true)
  const [cardview, setCardview] = useState(true)
  useEffect(() => {
    setData([...ReadInterviewsData.filter(item => item.activeTab === true)])
  }, [])

  const handleTab = activeTab => {

    setActiveTab(activeTab)
    if (activeTab === 'Read Interview') {
      setData([...ReadInterviewsData.filter(item => item.activeTab === true)])
    }
    if (activeTab === 'Give Interview') {
      setData([...ReadInterviewsData.filter(item => item.activeTab === false)])
    }

  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.tabbarcolorbackgroundcolor }} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { Navigation.navigate('RequestPage') }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={leftArrow} width="20" height="16" />
            <Text style={styles.text}>Interview Requests</Text>
            <SvgXml xml={rightArrow} width="8" height="12" style={styles.icon1} />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <SvgXml xml={search} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCardview(!cardview)}>
            <SvgXml xml={more} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginLeft: 30 }}>
        <Text style={styles.text0}>03</Text>
        <Text style={styles.text00}>Waiting for you !</Text>
      </View>

      <View style={styles.headerTab}>
        {ListTab.map((item, index) => {
          return (
            <TouchableOpacity style={[styles.button, activeTab === item.screen && styles.active]} onPress={() => handleTab(item.screen)} key={index}>
              <Text key={index} style={[activeTab === item.screen ? styles.activeText : styles.text1]}>{item.screen}</Text>
            </TouchableOpacity>
          )
        })}
      </View>


      <ScrollView ShowsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              question={item.question}
              profileName={item.profileName}
              answer={item.answer}
              activeTab={item.activeTab}
              Type={cardview}
            />
          )
        })}
      </ScrollView>

    </View>
  )
}

export default ProUserCard

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
    fontSize: fontsize.paragraph,
    color: colors.HeadingProfileTitles,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
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
    backgroundColor: colors.PrimaryBtn,
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
    color: colors.SubHeading,
    fontWeight: fontWeight.bold,
    fontFamily: fontfamily.fontRegular,
    marginLeft: 10,
  },




})