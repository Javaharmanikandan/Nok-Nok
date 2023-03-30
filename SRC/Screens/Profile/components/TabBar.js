import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Animated } from 'react-native'
import React, { useState } from 'react'
import { colors, fontsize, fontWeight, fontfamily } from '../../.././Constant/DesignConstant';
import { ReadInterviewsData } from '../../../Constant/DataConstant';
import Card from '../../Interviews/Card'
import Card1 from '../../Home/PopularInterviews/Card1';
import CreatePost from '../../CreatePage/components/CreatePost';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext'
const ListTab = [
  {
    screen: 'Interviews Given'
  },
  {
    screen: 'My quotes'
  },
  {
    screen: 'Questions Noked'
  }
]


const TabBar = (items) => {
  const {darktheme}=useContext(AuthContext);

  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Interviews Given')

  const handleTab = activeTab => {

    setActiveTab(activeTab)
    if (activeTab === 'Read Interview') {
    }
    if (activeTab === 'My quotes') {
    }
    if (activeTab === 'Questions Noked') {
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
      {activeTab === 'Interviews Given' &&
        <ScrollView ShowsVerticalScrollIndicator={false} style={styles.listView} contentContainerStyle={{ flexGrow: 1 }}>
          {ReadInterviewsData.map((item, index) => {
            return (
              <Card
                key={index}
                question={item.question}
                profileName={item.profileName}
                answer={item.answer}
                active={item.activeTab}
                Type={false}
                onPress= {() => navigation.navigate('Read', { item: item })}
              />
            )
          }
          )}
        </ScrollView>
      }
      {activeTab === 'My quotes' &&
        <ScrollView ShowsVerticalScrollIndicator={false} style={styles.listView}>
          {/* {ReadInterviewsData.map((item, index) => {
            return (
              <Card
                key={index}
                question={item.question}
                profileName={item.profileName}
                answer={item.answer}
                active={item.activeTab}
                Type={false}
              />
            )
          }
          )} */}
          <CreatePost />
        </ScrollView>
      }
      {activeTab === 'Questions Noked' &&
        <ScrollView ShowsVerticalScrollIndicator={false} style={styles.listView}>
          <Card1 width={'90%'} />

        </ScrollView>
      }
    </View>

  )
}

export default TabBar

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
    width: '30%',
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
    width: '100%',

  },

})