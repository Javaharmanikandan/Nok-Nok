import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors,LightThemeColors, fontfamily, fontsize, fontWeight } from '../../../Constant/DesignConstant'
import { SvgXml } from 'react-native-svg';
import Card from '../Card'
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




const ListTab = [
  {
    screen: 'Read Interview'
  },
  {
    screen: 'Give Interview'
  }
]

const cardData=[
  {
    active:true,
    question:'What you need to know about cybersecurity: Expect a future where a computer doesnt need a keyboard or a screen',
    answer:`Conservationists praised the deal's ambition, saying it amounted to a Paris Agree `,
  },
  {
    active:false,
    question:'What you need to know about cybersecurity: Expect a future where a computer doesnt need a keyboard or a screen',
    answer:`Conservationists praised the deal's ambition, saying it amounted to a Paris Agree `,
  },
  {
    active:true,
    question:'What you need to know about cybersecurity: Expect a future where a computer doesnt need a keyboard or a screen',
    answer:`Conservationists praised the deal's ambition, saying it amounted to a Paris Agree `,
  },
]
const PublicUserCard = () => {
  const [cardview, setCardview] = useState(true)
  const {darktheme}=useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
          <View style={styles.header}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <SvgXml xml={leftArrow} width="20" height="16" />
              </TouchableOpacity>
              <Text style={styles.text}>Read Interview</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <SvgXml xml={search} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCardview(!cardview)}>
                <SvgXml xml={more} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
       <ScrollView ShowsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
            {cardData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    Type={cardview}
                    activeTab={true}
                  />
                )})}
          </ScrollView>
    </View>
  )
}

export default PublicUserCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundcolor,
  },
  header: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
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