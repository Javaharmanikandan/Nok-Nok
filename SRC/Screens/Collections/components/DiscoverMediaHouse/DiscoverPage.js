import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { colors,LightThemeColors, fontWeight, fontfamily, fontsize } from '../../../../Constant/DesignConstant'
import Card from './Card';
import { useNavigation } from '@react-navigation/native';
import RecentListCard from '../RecentBox/RecentListCard';
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
const more = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="19" viewBox="0 0 28 19" fill="none">
<path d="M10 6.001H22M6 6.011L6.01 6M6 12.011L6.01 12M10 12.001H22" stroke="#C1C1C1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="27" height="17.011" rx="3.5" stroke="#7A7A7A"/>
</svg>`

const DiscoverPage = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState();
  const {darktheme}=useContext(AuthContext);

  const handler = (selected, id) => {
    const index = DiscoverMediaData.findIndex(object => {
      return object.id === id
    });
    const newArray = [...DiscoverMediaData];
    newArray[index].selected = !selected
    setActive(newArray)
  }
  const listView = () => {
    setActive(!active)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: colors.TabColor }} />
      <View style={styles.header}>
        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
          <SvgXml xml={leftArrow} width="20" height="16" />
          <Text style={styles.text}>Discover Media</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <SvgXml xml={search} width="20" height="20" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> {listView()}}>
            <SvgXml xml={more} width="28" height="19" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      {active ? (
        <ScrollView showsHorizontalScrollIndicator={false} fadingEdgeLength={100}>
          <RecentListCard data={DiscoverMediaData} />
        </ScrollView>
      ) : (
        <View style={styles.CardBox}>
          <ScrollView showsHorizontalScrollIndicator={false} fadingEdgeLength={100}>
           
            {DiscoverMediaData.map((item, index) => {
              return (
                <TouchableOpacity
                  key = {index}  
                  onPress={() => navigation.navigate('MediaHouseProfile', { item })}>
                <Card
                  style={styles.card}
                  key={index}
                  heading={item.heading}
                  followers={item.followers}
                  questions={item.interviews}
                  image={item.image}
                  width={358}
                  height={200}
                  selected={item.selected}
                  onPress={() => handler(item.selected, item.id)}

                />
                </TouchableOpacity>)
            })}
            
            <View style={styles.footer}>
              <View style={styles.footerBox}>
                <TouchableOpacity style={styles.viewbutton}>
                  <Text style={styles.footerText}>View More</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listbutton} onPress={() => { listView() }}>
                  <Text style={styles.footerText1}>View in List Mode</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  )
}

export default DiscoverPage

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
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  CardBox: {
    marginTop: 10,
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  footerBox: {
    width: '95%',
  },
  viewbutton: {
    backgroundColor: colors.ViewInterviewBG,
    borderRadius: 22,
    padding: 15,
  },
  listbutton: {
    backgroundColor: colors.FollowBtnBG,
    borderRadius: 22,
    padding: 15,
    marginTop: 20,
    marginBottom: 100,
  },
  footerText: {
    color: colors.Textcolor,
    fontSize: fontsize.subheading,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    textAlign: 'center',
  },
  footerText1: {
    color: colors.HeadingProfileTitles,
    fontSize: fontsize.subheading,
    fontWeight: Platform.OS === 'ios' ? fontWeight.medium : fontWeight.bold,
    fontFamily: Platform.OS === 'ios' ? fontfamily.fontRegular : fontfamily.fontRegular,
    textAlign: 'center',
  },
})