import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React,{useState} from 'react';
import { colors,LightThemeColors, fontsize, fontWeight, fontfamily } from '../../../../Constant/DesignConstant';
import Card from '../../../Interviews/Card';
import {ReadInterviewsData} from '../../../../Constant/DataConstant'
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthContext';


const ListTab = [
    {
      screen: 'Interviews'
    },
    {
      screen: 'Pinned interviews'
    },
  ]

const MediaHouseTabBar = () => {
        const [activeTab, setActiveTab] = useState('Interviews')
        const {darktheme}=useContext(AuthContext);
        const handleTab = activeTab => {
      
          setActiveTab(activeTab)
          if (activeTab === 'Interviews') {
          }
          if (activeTab === 'Pinned interviews') {
          }
        }
  return (
    <View style={styles.Container}>
    <View style={styles.headerTab}>
      {ListTab.map((item, index) => {
        return (
          <TouchableOpacity style={[styles.button, activeTab === item.screen && styles.active]} onPress={() => handleTab(item.screen)} key={index}>
            <Text key={index} style={[activeTab === item.screen ? styles.activeText : styles.text1]}>{item.screen}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
    {activeTab === 'Interviews' &&
        <ScrollView ShowsVerticalScrollIndicator={false} style={styles.listView}>
          {ReadInterviewsData.map((item, index) => {
            return (
              <Card
                key={index}
                question={item.question}
                profileName={item.profileName}
                answer={item.answer}
                active={item.activeTab}
                Type={true}
              />
            )
          }
          )}
        </ScrollView>
      }
      {activeTab === 'Pinned interviews' &&
        <ScrollView ShowsVerticalScrollIndicator={false} style={styles.listView}>
          {ReadInterviewsData.map((item, index) => {
            return (
              <Card
                key={index}
                question={item.question}
                profileName={item.profileName}
                answer={item.answer}
                active={item.activeTab}
                Type={true}
              />
            )
          }
          )}
        </ScrollView>
      }

    </View>
  )
}

export default MediaHouseTabBar

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.backgroundcolor,
        alignItems: 'center',
      },
      headerTab: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      button: {
        height: 40,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: colors.TabColor,
        borderBottomWidth: 2,
      },
      active: {
        borderBottomColor: colors.primarycolor,
        borderBottomWidth: 2,
      },
      text1: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
      },
      activeText: {
        color: colors.HeadingProfileTitles,
        fontSize: fontsize.paragraph,
        fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
        fontFamily: fontfamily.fontRegular,
      },
      listView: {
    
      },
})